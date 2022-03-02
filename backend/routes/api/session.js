// this file will hold the resources for the route path beginning with /api/session
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User, Like, Follow, Album } = require('../../db/models');

const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

/*************************** MORE MIDDLEWARE **************************** */

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,
];

/************************ ROUTES ***************************/

// Login 
router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;
  const user = await User.login({ credential, password });
  const likes = await Like.findAll({
    where: {
      user_id: user.id
    }
  });
  const follows = await Follow.findAll({
    where: {
      user_id: user.id
    }
  });
  const followers = await Follow.findAll({
    where: {
      followed_user_id: user.id
    }
  });
  const albums = await Album.findAll({
    where: {
      user_id: user.id
    }
  });

  if (!user) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['The provided credentials were invalid.'];
    return next(err);
  }

  await setTokenCookie(res, user);

  return res.json({
    user, likes, follows, followers, albums
  });
}));

// Logout 
router.delete('/', (_req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'success' });
});

// restore session user
router.get('/', restoreUser, async (req, res) => {
  const { user } = req;
  if (user) {
    const likes = await Like.findAll({
      where: {
        user_id: user.id
      }
    });
    const follows = await Follow.findAll({
      where: {
        user_id: user.id
      }
    });
    const followers = await Follow.findAll({
      where: {
        followed_user_id: user.id
      }
    });
    const albums = await Album.findAll({
      where: {
        user_id: user.id
      }
    });
    return res.json({
      user: user.toSafeObject(), // will return the session user as JSON under the key of user
      likes,
      follows,
      followers,
      albums
    });
  } else {
    return res.json({}); // will return a JSON with an empty object
  }
});




module.exports = router;
