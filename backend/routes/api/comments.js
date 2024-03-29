const express = require('express')
const asyncHandler = require('express-async-handler');

const { Comment, User, Track } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const comments = await Comment.findAll({
            include: [User]
        });
        return res.json(comments);
    })
);

router.post('/',
    asyncHandler(async (req, res) => {
        const { text, userId, trackId } = req.body;
        const newComment = await Comment.create({ text, userId, trackId })

        // newComment donesn't include the User or Track information.
        const comment = await Comment.findOne({
            where: { id: newComment.id },
            include: [User]
        });
        return res.json(comment);
    })
);

router.put("/:commentId",
    asyncHandler(async (req, res) => {
        const { text } = req.body;
        const commentId = req.params.commentId

        const comment = await Comment.findOne({
            where: { id: commentId },
            include: [User]
        });

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