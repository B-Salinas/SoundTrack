// TODO: IMPORTS
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');
const { requireAndVerifyAuth } = require('../../utils/auth');

// TODO: CREATE IMPORT
const router = express.Router();

// TODO: GET ALL COMMENTS IN ORDER
router.get('/', asyncHandler(async (req, res) => {
  const comments = await Comment.findAll({
    order: [['id', 'DESC']]
  });
  return res.json(comments);
}));

// TODO: GET A COMMENT
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByPk(Number(id));
  return res.json(comment);
}));

// TODO: POST A COMMENT
router.post('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { songId, content } = req.body;

  try {
    const comment = await Comment.create({
      user_id: userId,
      song_id: songId,
      content
    });

    return res.json(comment);
  } catch (e) {
    res.sendStatus(500);
  }
}));

// TODO: PATCH A COMMENT
router.patch('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { commentId, content } = req.body;

  if (content === undefined) res.sendStatus(400);

  try {
    const comment = await Comment.findByPk(commentId);

    if (userId !== comment.user_id) res.sendStatus(401);

    comment.content = content;
    await comment.save();
    res.send('comment updated');
  } catch (e) {
    res.sendStatus(500);
  }
}));

// TODO: DELETE A COMMENT
router.delete('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { commentId } = req.body;

  try {
    const comment = await Comment.findByPk(commentId);

    if (userId !== comment.user_id) res.sendStatus(401);

    await comment.destroy();
    return res.send('song deleted');
  } catch (e) {
    res.sendStatus(500);
  }
}));

// TODO: EXPORT ROUTER
module.exports = router;
