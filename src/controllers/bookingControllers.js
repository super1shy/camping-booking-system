const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const renderTemplate = require('../lib/renderTemplate');

const { Reservation, User, Place, Location } = require('../../db/models');
const UsersBookings = require('../views/booking/UsersBookings');

exports.createBooking = async (req, res) => {
  try {
    const user_id = req.session.user.id;
    const place_id = req.params.id;
    const { checkInDate, checkOutDate } = req.body;
    const isMade = await Reservation.create({
      user_id,
      place_id,
      checkInDate,
      checkOutDate,
    });
    res.json(isMade);
  } catch (error) {
    console.error(error);
  }
};

exports.payBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const currentBooking = await Reservation.findOne({
      where: { id },
      include: { model: Place },
    });
    const date1 = new Date(currentBooking.checkInDate);
    const date2 = new Date(currentBooking.checkOutDate);
    const nightsToStay = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: currentBooking.Place.name,
            },
            unit_amount: currentBooking.Place.price * 100,
          },
          quantity: nightsToStay,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/booking/success/${id}`,
      cancel_url: `${process.env.CLIENT_URL}/booking`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.payment = async (req, res) => {
  try {
    const { id } = req.params;
    await Reservation.update({ status: true }, { where: { id } });
    res.redirect('/booking');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.showBookings = async (req, res) => {
  try {
    const { user } = req.session;
    const currenUsersBookings = await Reservation.findAll({
      where: { user_id: user.id },
      include: { model: Place, include: { model: Location } },
      order: [['createdAt', 'DESC']],
    });

    // change DB to have already nights to stay
    renderTemplate(UsersBookings, { currenUsersBookings, user }, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const isDeleted = await Reservation.destroy({ where: { id } });
    res.json(isDeleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
