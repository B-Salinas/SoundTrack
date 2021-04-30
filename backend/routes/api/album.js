const express = require('express');
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

const router = express.Router();

/****************************************************************** */

// get all albums
router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll();
  return res.json(albums);
}))

// get specific album
router.get('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findOne(req.params.id);
  return res.json(album);
}))