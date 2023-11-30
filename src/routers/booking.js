const express = require('express');

const bookingControllers = require('../controllers/bookingControllers');

const router = express.Router();

router.post('/:id', bookingControllers.createBooking);
router.post('/checkout/:id', bookingControllers.payBooking);
router.get('/', bookingControllers.showBookings);
router.delete('/:id', bookingControllers.deleteBooking);
router.get('/success/:id', bookingControllers.payment);

module.exports = router;
