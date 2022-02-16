// TODO: IMPORTS
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Follow } = require('../../db/models');
const { requireAndVerifyAuth } = require('../../utils/auth');

// TODO: CREATE ROUTER
const router = express.Router();

// TODO: POST A FOLLOW
// ...follow a user
router.post('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const userIdToFollow = req.body.userId;

  try {
    const follow = await Follow.findOne({
      where: {
        user_id: userId,
        followed_user_id: userIdToFollow
      }
    });

    if (follow) {
      res.send(`current user is already following user: ${userIdToFollow}`);
    } else {
      await Follow.create({
        user_id: userId,
        followed_user_id: userIdToFollow
      });

      res.send(`following user: ${userIdToFollow}!`);
    }
  } catch (e) {
    res.status(500);
    res.send(`unable to follow user: ${userIdToFollow}`);
  }
}));

// TODO: DELETE A FOLLOW
// ...unfollow a user
router.delete('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const unfollowUserId = req.body.userId;

  try {
    const follow = await Follow.findOne({
      where: {
        user_id: userId,
        followed_user_id: userIdToFollow
      }
    });

    if (!follow) {
      res.send(`current user wasn't following user: ${unfollowUserId}!`);
    } else {
      await follow.destroy();
      res.send(`unfollowed user: ${unfollowUserId}!`);
    }
  } catch (e) {
    res.status(500);
    res.send(`unable to unfollow user: ${unfollowUserId}`);
  }
}));

// TODO: EXPORT ROUTER
module.exports = router;
