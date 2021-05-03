const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');

const router = express.Router();

/************************************************************** */

// get all songs
router.get('/', asyncHandler(async (req, res) => {
  const songs = await Song.findAll();
  return res.json(songs);
}));

// get a specific song
router.get('/:id', asyncHandler(async function (req, res) {
  const song = await Song.findOne(req.params.id);
  return res.json(song);
}));