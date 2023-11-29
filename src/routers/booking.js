const express = require('express');

const bookingControllers = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/:id', bookingControllers.createBooking);
router.post('/checkout/:id', bookingControllers.payBooking);

module.exports = router;
