const renderTemplate = require('../lib/renderTemplate');
const Homepage = require('../views/places/Homepage');
const PlacePage = require('../views/places/PlacePage');

const { Place, Location, Favourites } = require('../../db/models');

exports.homepage = async (req, res) => {
  const { user } = req.session;
  const places = await Place.findAll({
    include: [{ model: Location }, { model: Favourites }],
  });
  renderTemplate(Homepage, { title: 'Home', user, places }, res);
};

exports.placePage = async (req, res) => {
  try {
    const { user } = req.session;
    const place = await Place.findOne({
      where: { id: req.params.id },
      include: [{ model: Location }, { model: Favourites }],
    });
    renderTemplate(PlacePage, { title: place.capacity, user, place }, res);
  } catch (error) {
    console.error(error);
  }
};
