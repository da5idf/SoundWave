const express = require('express')
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const comments = await Comment.findAll();
        return res.json(comments);
    })
);

router.post('/',
    asyncHandler(async (req, res) => {
        const { text, userId, trackId } = req.body;
        const comment = await Comment.create({ text, userId, trackId })
        return res.json(comment);
    })
);

router.put("/:commentId",
    asyncHandler(async (req, res) => {
        const { text } = req.body;
        const commentId = req.params.commentId

        const comment = await Comment.findByPk(commentId);

        if (comment) {
            comment.text = text;

            await comment.save();

            return res.json(comment);
        }
    })
)

router.delete("/:commentId",
    asyncHandler(async (req, res) => {
        const commentId = req.params.commentId;
        const comment = await Comment.findByPk(commentId);

        if (comment) {
            await comment.destroy();

            return res.json('comment deleted')
        }
    })
)

module.exports = router;