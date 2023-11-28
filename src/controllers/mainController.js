const renderTemplate = require('../lib/renderTemplate');
const Homepage = require('../views/Homepage');

exports.homepage = (req, res) => {
  const { user } = req.session;
  renderTemplate(Homepage, { title: 'Home', user }, res);
};
