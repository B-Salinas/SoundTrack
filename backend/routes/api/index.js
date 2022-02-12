const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js');
const commentsRouter = require('./comments.js');


// const { User } = require('../../db/models');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');

/********************* ROUTE SETUP ***************************/
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/comments', commentsRouter);

/************************* TESTING **************************** */
// will test the setTokenCookie function by getting the demo user and called setTokenCookie

// router.get('/set-token-cookie', asyncHandler( async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     },
//   })
//   setTokenCookie(res, user);

//   return res.json({ user });
// }));





// will test the restoreUser middleware by connecting the middleware and checking
// whether or not the req.user key has been populated by the middlware properly

// router.get('/restore-user', restoreUser, (req, res) => {
//   return res.json(req.user);
// });




// will test requireAuth that willr eturn an error if there is no session
// user, otherwise return the session's user information

// router.get('/require-auth', requireAuth, (req, res) => {
//   return res.json(req.user);
// });

/************************* ROUTES **************************** */



// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
