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
const storeItems = new Map([
  [1, { priceInCents: 10000, name: 'Learn React Today' }],
  [2, { priceInCents: 20000, name: 'Learn CSS Today' }],
]);

exports.payBooking = async (req, res) => {
  console.log('============ payBooking');
  try {
    const { id, quantity } = req.body;
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
              name: currentBooking.name,
            },
            unit_amount: currentBooking.Place.price * 1000,
          },
          quantity: nightsToStay,
        },
      ],

      success_url: `${process.env.CLIENT_URL}/success/${id}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    console.log('!!!!!!!!!!!!', session);
    if (session.id) {
      res.json({ url: session.url });
    }
  } catch (e) {
    console.log('ERROR ========= ', e);
    res.status(500).json({ error: e.message });
  }
  //   try {
  //     const { id } = req.params;
  //     const currentBooking = await Reservation.findOne({
  //       where: { id },
  //       include: { model: Place },
  //     });
  //     const date1 = new Date(currentBooking.checkInDate);
  //     const date2 = new Date(currentBooking.checkOutDate);
  //     const nightsToStay = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
  //     const session = await stripe.checkout.sessions.create({
  //       payment_method_types: ['card'],
  //       mode: 'payment',
  //       line_items: {
  //         price_data: {
  //           currency: 'USD',
  //           product_data: {
  //             name: currentBooking.Place.name,
  //           },
  //           unit_amount: currentBooking.Place.price * 1000,
  //         },
  //         quantity: nightsToStay,
  //       },
  //       success_url: `/success.html`,
  //       cancel_url: `/cancel.html`,
  //     });
  //     res.json({ url: session.url });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // exports.seeBookings = async (req, res) => {
  //   try {
  //     const user_id = req.session.user.id;
  //     const currentUserBookings = await Reservation.findAll({
  //       where: { user_id },
  //       include: { model: Place, include: { model: Location } },
  //     });
  //     res.json(currentUserBookings);
  //     // render page with all bookings here
  //   } catch (error) {
  //     console.error(error);
  //   }
};
