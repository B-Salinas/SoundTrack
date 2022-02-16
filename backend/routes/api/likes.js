// TODO: IMPORTS
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Like } = require('../../db/models');
const { requireAndVerifyAuth } = require('../../utils/auth');

// TODO: CREATE ROUTER
const router = express.Router();

// TODO: POST A LIKE
// ...or "like a song"
router.post('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { songId } = req.body;

  try {
    const like = await Like.findOne({
      where: {
        user_id: userId,
        song_id: songId
      }
    });

    if (like) {
      res.send(`user: ${userId} alreadly likes song: ${songId}!`);
    } else {
      await Like.create({
        user_id: userId,
        song_id: songId
      });

      res.send(`song: ${songId} liked!`);
    }
  } catch (e) {
    res.status(500);
    res.send(`couldn't like song: ${songId}...`);
  }
}));

// TODO: DELETE A LIKE
// ...or "unlike a song"
router.delete('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { songId } = req.body;

  try {
    const like = await Like.findOne({
      where: {
        user_id: userId,
        song_id: songId
      }
    });

    if (!like) {
      res.send('how did you even reach this route if you haven\'t liked the song yet?');
    } else {
      await like.destroy();
      res.send(`song: ${songId} unliked!`);
    }
  } catch (e) {
    res.status(500);
    res.send(`error unliking song: ${songId}`);
  }
}));

// TODO: EXPORT ROUTER
module.exports = router;
