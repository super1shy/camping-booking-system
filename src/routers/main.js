const express = require('express');

const mainControllers = require('../controllers/mainController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/', mainControllers.homepage);
router.get('/:id', mainControllers.placePage);
router.post('/:id', mainControllers.makeReservation);
// router.get('/favourites', authMiddleware, mainControllers.favourites);

module.exports = router;
