const express = require('express')
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const comments = await Comment.findAll();
        return res.json(comments);
    })
)

router.post('/',
    asyncHandler(async (req, res) => {
        const { text, userId, trackId } = req.body;
        const comment = await Comment.create({ text, userId, trackId })
        return comment;
    })
);

module.exports = router;