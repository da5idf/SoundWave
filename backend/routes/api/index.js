const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const commentRouter = require('./comments.js');
const trackRouter = require('./tracks.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/comments', commentRouter);
router.use('/tracks', trackRouter);

module.exports = router;