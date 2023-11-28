const renderTemplate = require('../lib/renderTemplate');
const Homepage = require('../views/Homepage');

const { Place, Location, Reservation } = require('../../db/models');
const PlacePage = require('../views/PlacePage');

exports.homepage = async (req, res) => {
  const { user } = req.session;
  const places = await Place.findAll({ include: Location });
  renderTemplate(Homepage, { title: 'Home', user, places }, res);
};

exports.placePage = async (req, res) => {
  try {
    const { user } = req.session;
    const place = await Place.findOne({
      where: { id: req.params.id },
      include: Location,
    });
    renderTemplate(PlacePage, { title: place.capacity, user, place }, res);
  } catch (error) {
    console.error(error);
  }
};

exports.makeReservation = async (req, res) => {
  try {
    const user_id = req.session.user.id;
    const place_id = req.params.id;
    const isMade = await Reservation.create({
      user_id,
      place_id,
      checkout: '2020-11-11',
      check_in: '2020-12-12',
    });
    res.json(isMade);
  } catch (error) {
    console.error(error);
  }
};

// exports.favourites = async (req, res) => {
//   try {
//     const user_id = req.session.user.id;
//     console.log(user_id);
//     const faves = await Reservation.findAll({ where: { user_id } });
//     res.json(faves);
//   } catch (error) {}
// };
