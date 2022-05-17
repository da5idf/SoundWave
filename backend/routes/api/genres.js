const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Genre } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {

    const genres = await Genre.findAll({
        attributes: ["id", "name"]
    })

    return res.json(genres)
}))

module.exports = router;