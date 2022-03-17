// this file will hold the resources for the route path beginning with /api/users
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Like, Follow, Comment, Album, Song } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const user = require('../../db/models/user');

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
router.get("/parameters?", asyncHandler((async (req, res) => {
  const { userId, username } = req.query;
  const includeArgs = [       // <---- ordered by DESC to get most recent data at the top of the list
    {
      model: Like,
      separate: true,
      order: [['id', 'DESC']]
    },
    {
      model: Comment,
      include: [Song],
      order: [['id', 'DESC']]
    },
    {
      model: Album,
      separate: true,
      order: [['id', 'DESC']],
    },
    {
      model: Follow,
      as: 'Followers',
      separate: true,
      order: [['id', 'DESC']]
    },
    {
      model: Follow,
      as: 'Following',
      separate: true,
      order: [['id', 'DESC']]
    }
  ];
  let user;

  if (userId) {
    user = await User.findByPk(parseInt(userId, 10), { include: includeArgs });
  } else {
    user = await User.findOne({
      where: {
        username
      },
      include: includeArgs
    });
  }

  const userLikedSongs = await Song.findAll({
    where: {
      id: user.Likes.map(like => like.song_id)
    },
    include: [Like, Comment, Album]
  });

  const usersFollowing = await User.findAll({
    where: {
      id: user.Following.map(user => user.followed_user_id)
    },
    include: [
      {
        model: Follow,
        as: 'Followers'
      }
    ]
  });

  const userFollowers = await User.findAll({
    where: {
      id: user.Followers.map(user => user.user_id)
    },
    include: [
      {
        model: Follow,
        as: 'Followers'
      }
    ]
  });

  const parsedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    Albums: user.Albums,
    Comments: user.Comments.map(comment => {
      return {
        id: comment.id,
        content: comment.content,
        song_title: comment.Song.song_title,
        updatedAt: comment.updatedAt
      }
    }),
    likedSongs: userLikedSongs.map(song => {
      return {
        id: song.id,
        song_title: song.song_title,
        album_title: song.Album.album_title,
        numLikes: song.Likes.length,
        numComments: song.Comments.length
      }
    }),
    usersFollowing: usersFollowing.map(user => {
      return {
        id: user.id,
        username: user.username,
        profilePic: user.profilePic,
        numFollowers: user.Followers.length
      }
    }),
    followers: {
      followCount: user.Followers.length,
      users: userFollowers.map(user => {
        return {
          id: user.id,
          username: user.username,
          profilePic: user.profilePic,
          numFollowers: user.Followers.length
        }
      })
    }
  };

  return res.json(parsedUser);
})));

module.exports = router;
