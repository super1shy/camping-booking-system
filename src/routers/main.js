const express = require('express');

const mainControllers = require('../controllers/mainController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, mainControllers.homepage);
router.get('/:id', authMiddleware, mainControllers.placePage);
router.post('/:id', authMiddleware, mainControllers.makeReservation);
//router.get('/favourites', authMiddleware, mainControllers.favourites);

module.exports = router;
