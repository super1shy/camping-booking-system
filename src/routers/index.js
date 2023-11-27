const express = require('express');

const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();

router.get('/', (req, res) => {
  renderTemplate({}, res);
});

module.exports = router;
