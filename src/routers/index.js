const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const indexControllers = require('../controllers/indexControllers');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate(Main, { title: 'Main' }, res);
});

router.get('/register', indexControllers.registerPage);
router.post('/register', indexControllers.register);

router.get('/login', indexControllers.loginPage);
router.post('/login', indexControllers.login);

router.get('/logout', indexControllers.logout);

module.exports = router;
