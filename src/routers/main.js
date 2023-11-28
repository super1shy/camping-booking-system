const express = require('express');

const mainControllers = require('../controllers/mainController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, mainControllers.homepage);

module.exports = router;
