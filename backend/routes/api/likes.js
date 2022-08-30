const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Likes } = require('../../db/models');

router.get('/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;
    console.log("&*&*&*&*&*&*&*&*&*&")
    // const likes = await Likes.findAll({
    //     where: { userId }
    // })

    // return res.json(likes)
    return res.json([1, 2, 3, 5, 10, 15, 17])
}))

module.exports = router;