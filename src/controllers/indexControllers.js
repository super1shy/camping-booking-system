const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/auth/Registration');
const Login = require('../views/auth/Login');

exports.registerPage = (req, res) => {
  renderTemplate(Registration, {}, res);
};

exports.register = (req, res) => {
  res.send(req.body);
};

exports.loginPage = (req, res) => {
  renderTemplate(Login, {}, res);
};
