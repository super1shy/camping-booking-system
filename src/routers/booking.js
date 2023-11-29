const express = require('express');

const bookingControllers = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/:id', bookingControllers.createBooking);
router.post('/pay/:id', bookingControllers.payBooking);
// router.get('/:id', bookingControllers.seeBookings);

module.exports = router;
