// this file will hold the resources for the route path beginning with /api/users
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

/******************* MORE MIDDLEWARE ******************** */
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];



/******************** ROUTES ******************** */

// Signup 
router.post('', validateSignup, asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signup({ email, username, password });

  await setTokenCookie(res, user);

  return res.json({
    user,
  });
}),
);

// get a user 
router.get("/:id", asyncHandler((async (req, res) => {
  let user_id = parseInt(req.params.id, 10);
  let user = await User.getUserById(user_id);

  console.log(user);
  return res.json(user);
})));

// TODO: GET ALL FOLLOWERS OF A USER
router.get('/followers/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const followers = Follow.findAll({
      where: {
        followed_user_id: userId
      }
    });

    return res.json(followers);
  } catch (e) {
    res.status(500);
    res.send(`unable to retrieve followers for user: ${userId}`);
  }
}));

// TODO: GET ALL FOLLOWS OF A USER
// (get all the people that the given user
// is following)
router.get('/following/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const follows = Follow.findAll({
      where: {
        user_id: userId
      }
    });

    return res.json(follows);
  } catch (e) {
    res.status(500);
    res.send(`unable to retrieve follows for user: ${userId}`);
  }
}));

module.exports = router;
