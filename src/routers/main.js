const express = require('express');

const mainControllers = require('../controllers/mainController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/', mainControllers.homepage);
router.get('/:id', mainControllers.placePage);

module.exports = router;
