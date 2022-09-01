const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const commentRouter = require('./comments.js');
const trackRouter = require('./tracks.js');
const searchRouter = require('./search');
const genreRouter = require('./genres');
const likesRouter = require('./likes');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/comments', commentRouter);
router.use('/tracks', trackRouter);
router.use('/search', searchRouter);
router.use('/genres', genreRouter);
router.use('/likes', likesRouter);

module.exports = router;