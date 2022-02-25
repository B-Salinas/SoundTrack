// TODO: IMPORTS
const express = require('express');
const asyncHandler = require('express-async-handler');


const { Like } = require('../../db/models/');
const { requireAndVerifyAuth } = require('../../utils/auth')

// TODO: CREATE ROUTER
const router = express.Router();

/************************************************************** */

// TODO: POST A LIKE
// ...or "like a song"
router.post('/', requireAndVerifyAuth, asyncHandler( async (req, res) => {
    const userId = req.user.id;
    const { songId } = req.body;
    try {
        const findLike = await Like.findOne({
            where: {
                song_id: songId,
                user_id: userId
            }
        })
        if (!findLike) {
            const likedSong = await Like.create({
                song_id: songId,
                user_id: userId,
            })
            return res.json(likedSong);
        } else {
            res.send('User has already liked song!')
        }
    } catch (e) {
        res.status(500);
        res.send('it didn\'t work... :(');
    }
}))

// TODO: DELETE A LIKE
// ...or "unlike a song"
router.delete('/', requireAndVerifyAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { songId } = req.body; 
    try {
        const findLike = await Like.findOne({
            where: {
                song_id: songId,
                user_id: userId
            }
        });
        const likedSongId = findLike.id 
        await findLike.destroy();
        return res.json(likedSongId)
    } catch (e) {
        res.sendStatus(500);
    }
}))

// TODO: EXPORT ROUTER
module.exports = router;





