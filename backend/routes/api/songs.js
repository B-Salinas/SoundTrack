const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');
// TODO: IMPORT BACKEND AUTHENTICATION MIDDLEWARE 'requireAuth' FOR 
// USER FOR SENSITIVE API ROUTES (POST / PATCH / DELETE)

const router = express.Router();

/************************************************************** */

// GET ALL SONGS
router.get('/', asyncHandler(async (req, res) => {
  const songs = await Song.findAll();
  return res.json(songs);
}));

// MAYBE TODO: ADD LOGIC FOR GETTING AMOUNT OF LIKES OF A SONG
// GET A SPECIFIC SONG
// router.get('/:id', asyncHandler(async function (req, res) {
//   const song = await Song.findOne(req.params.id);
//   return res.json(song);
// }));

// POST A SPECIFIC SONG
// TODO: ADD USER AUTH MIDDLEWARE
router.post('/', asyncHandler(async (req, res) => {
  const { album, title, img, audio } = req.body;
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
