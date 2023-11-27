require('@babel/register');
require('dotenv').config();

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./src/routers/index');

const app = express();
const PORT = process.env.PORT ?? 3000;
const sessionConfig = {
  store: new FileStore(),
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession(sessionConfig));
app.use(express.json());
app.use(logger('dev'));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
