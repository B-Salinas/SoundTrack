const express = require('express');
const asyncHandler = require('express-async-handler');


const { Follow } = require('../../db/models/');
const { requireAndVerifyAuth } = require('../../utils/auth')

const router = express.Router();

// TODO: POST A FOLLOW
// ...follow a user
router.post('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { followedUserId } = req.body;

  try {
    const findFollow = await Follow.findOne({
      where: {
        user_id: userId,
        followed_user_id: followedUserId
      }
    });

    if (!findFollow) {
      const followedUser = await Follow.create({
        user_id: userId,
        followed_user_id: followedUserId
      });

      return res.json(followedUser);
    } else {
      res.send(`User is already following User ID: ${followedUserId}!`);
    }
  } catch (e) {
    res.sendStatus(500);
  }
}));

// TODO: DELETE A FOLLOW
// ...unfollow a user
router.delete('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { followedUserId } = req.body;

  try {
    const followedUser = await Follow.create({
      user_id: userId,
      followed_user_id: followedUserId
    });

    await followedUser.destroy();
    return res.json(followedUserId);
  } catch (e) {
    res.sendStatus(500);
  }
}));

module.exports = router;
