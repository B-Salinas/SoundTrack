const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie, this function will be used in the login/signup routes later
const setTokenCookie = (res, user) => {

  // create the token
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 = 1 week
  );

  const isProduction = process.env.NODE_ENV === 'production';

  // set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
}

const restoreUser = (req, res, next) => {
  //token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

// if there is no current user, return an error
const requireAuth = [
  restoreUser,
  function (req, res, next) {
    if (req.user) return next();

    const err = new Error('Unauthorized');

    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;

    return next(err);
  },
];

// ADD VERIFICATION OF AUTHENTICATION FOR BACKEND
// INSTEAD OF JUST VERIFYING A USER EXISTS
const requireAndVerifyAuth = [
  requireAuth,
  function (req, res, next) {
    if (req.user.id === req.body.userId) return next();

    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;

    return next(err);
  }
];

module.exports = {
  setTokenCookie,
  restoreUser,
  requireAuth,
  requireAndVerifyAuth
};