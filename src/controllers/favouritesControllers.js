const bcrypt = require('bcrypt');

const { Favourites, Place, Location } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

exports.currentUsersFavourites = async (req, res) => {
  try {
    const { user } = req.session;
    const favesPlaces = await Favourites.findAll({
      where: { user_id: user.id },
      include: { Place, include: { Location } },
    });

    res.send(favesPlaces);
  } catch (error) {
    console.error(error);
  }
};

exports.addFavouritePlace = async (req, res) => {
  try {
    const [query, created] = await Favourites.findOrCreate({
      where: {
        user_id: req.session.user.id,
        place_id: req.params.id,
      },
    });

    if (query || created) {
      res.json({ status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.removeFavouritePlace = async (req, res) => {
  try {
    const isDeleted = await Favourites.destroy({
      where: {
        user_id: req.session.user.id,
        place_id: req.params.id,
      },
    });
    res.json(isDeleted);
  } catch (error) {
    console.error(error);
  }
};
