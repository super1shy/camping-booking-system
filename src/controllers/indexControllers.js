const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/auth/Registration');
const Login = require('../views/auth/Login');

exports.registerPage = (req, res) => {
  renderTemplate(Registration, {}, res);
};

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7);
    await User.create({ firstName, lastName, email, password: hashedPassword });
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    renderTemplate(
      Registration,
      { error: 'This email has been already in use' },
      res
    );
  }
};

exports.loginPage = (req, res) => {
  renderTemplate(Login, {}, res);
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      renderTemplate(
        Login,
        {
          error: 'User with this email address doesnt exist',
        },
        res
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      renderTemplate(Login, { error: 'Invalid password' }, res);
    } else {
      req.session.user = {
        id: user.id,
        username: user.firstName,
      };
      res.redirect('/main');
    }
  } catch (error) {
    renderTemplate(
      Login,
      {
        error: 'An error occured. Please, try again',
      },
      res
    );
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.clearCookie('Flash');
      res.redirect('/');
    }
  });
};
