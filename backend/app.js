/*************** REQUIRES ***************/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const { ValidationError } = require('sequelize');

const { environment } = require('./config');
const isProduction = environment === 'production';

/*************** APP SETUP ***************/
const app = express();

app.use(morgan('dev')); // connects the morgan middleware for logging information about requests and responses
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing JSON bodies of requests with 'content-type': 'application/json'

/*************** MIDDLEWARE ***************/
if (!isProduction) {
  app.use(cors()); // security middleware that enables cors only in development
}

app.use(helmet({
  contentSecurityPolicy: false // helmet helps set a variety of headers to better secure your app
}));

app.use(
  csurf({ // set the _csrfToken and creates req.csrfToken method
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

/*************** ROUTES ***************/
app.use(routes);



/*************** ERROR HANDLERS ***************/
// catch unhandled requrests and forward to error handler
app.use((_req, _res, next) => {
  const err = new Error("The reqested resource couldn't be found!!!");

  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found!"];
  err.status = 404;

  next(err);
});

// processes sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize Error
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation Error';
  }
  next(err);
});

//error formatter 
app.use((err, _req, _res, _next) => {
  _res.status(err.status || 500);
  console.error(err);
  _res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

/*************** EXPORTS ***************/
module.exports = app;
