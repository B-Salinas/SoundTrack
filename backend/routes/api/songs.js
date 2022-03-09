const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song, Album, Like, Comment } = require('../../db/models');
// TODO: IMPORT BACKEND AUTHENTICATION MIDDLEWARE 'requireAuth' FOR 
// USER FOR SENSITIVE API ROUTES (POST / PATCH / DELETE)

const router = express.Router();

/************************************************************** */

// GET ALL SONGS
router.get('/', asyncHandler(async (req, res) => {
  const songs = await Song.findAll({ include: [Album, Like, Comment] });
  return res.json(songs);
}));

// GET A SPECIFIC SONG
router.get('/:data', asyncHandler(async function (req, res) {
  const { songId, songTitle, albumId } = req.query;
  let song;

  if (songId) {
    song = await Song.findByPk(parseInt(songId, 10), {
      include: [Like, Comment]
    });
  } else {
    song = await Song.findOne({
      where: {
        song_title: songTitle,
        album_id: albumId,
      },
      include: [Like, Comment]
    });
  }

  return res.json(song);
}));

// POST A SPECIFIC SONG
// TODO: ADD USER AUTH MIDDLEWARE
router.post('/', asyncHandler(async (req, res) => {
  const { album, title, img, audio } = req.body; // req.body has to do with the front end
  try {
    const newSong = await Song.create({
      album_id: album,
      song_title: title,
      img_url: img,
      audio_url: audio
    })
    return res.json(newSong);
  } catch (e) {
    // can use below code to modify status messages:
    res.status(500);
    res.send('it didn\'t work... :(')
  }
}))

// UPDATE A SONG
// TODO: ADD USER AUTH MIDDLEWARE
router.patch('/', asyncHandler(async (req, res) => {
  const { song_id, album, title, img, audio } = req.body;
  try {
    const updateSong = await Song.findByPk(song_id);

    // add more specific conditions, i.e.: (album !== undefined)
    // so users can actually set a title as blank if they
    // want to
    if (album) updateSong.album_id = album;

    if (title) updateSong.song_title = title;

    if (img) updateSong.img_url = img;

    if (audio) updateSong.audio_url = audio;

    await updateSong.save()
    res.send('song successfully updated!!!!')

  } catch (e) {
    res.sendStatus(500);
  }
}))

// DELETES A SPECIFIC SONG
// TODO: ADD USER AUTH MIDDLEWARE
router.delete('/', asyncHandler(async (req, res) => {
  const { song_id } = req.body;
  try {
    const deleteSong = await Song.findByPk(song_id);
    await deleteSong.destroy()
    return res.send('song successfully deleted! :)');
  } catch (e) {
    res.sendStatus(500);
  }
}))

module.exports = router;
