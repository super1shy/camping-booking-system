const express = require('express');

const favouritesControllers = require('../controllers/favouritesControllers');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/', favouritesControllers.currentUsersFavourites);
router.post('/:id', favouritesControllers.addFavouritePlace);
router.delete('/:id', favouritesControllers.removeFavouritePlace);

module.exports = router;
