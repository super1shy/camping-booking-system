const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const { Reservation, User, Place, Location } = require('../../db/models');

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
      cancel_url: `${process.env.CLIENT_URL}/places/${currentBooking.place_id}`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// exports.bookingInfo = async (req, res) => {
//   try {
//     const { id } = req.param;
//     const currentBooking = await Reservation.findOne({
//       where: { id },
//       include: { model: Place },
//     });
//     const date1 = new Date(currentBooking.checkInDate);
//     const date2 = new Date(currentBooking.checkOutDate);
//     const nightsToStay = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

//     res.json({name: currentBooking.Place.name, unit_amount})
//   } catch (error) {}
// };
