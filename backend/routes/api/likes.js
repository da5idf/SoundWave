const express = require('express')
const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');

const router = express.Router();
const { Like } = require('../../db/models');

router.get('/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const likes = await Like.findAll({
        where: { userId },
    })

    return res.json(likes)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { userId, trackId } = req.body;

    const newLike = await Like.create({ userId, trackId })

    return res.json(newLike)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const { userId, trackId } = req.body;

    const like = await Like.findOne({
        where: {
            [Op.and]: [{ userId }, { trackId }]
        }
    })

    await like.destroy();

    return res.json(like);
}))

module.exports = router;