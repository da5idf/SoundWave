const express = require('express')
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');

const router = express.Router();

router.post('/',
    asyncHandler(async (req, res) => {
        const { text } = req.body;
        const comment = await Comment.create({ text })

    })
);

module.exports = router;