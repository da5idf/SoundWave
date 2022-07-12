const express = require('express')
const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');

const router = express.Router();
const { User, Track, sequelize } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {

    const users = await User.findAll({
        attributes: ["id", "firstName", "lastName"]
    })


    const songs = await Track.findAll({
        attributes: ["id", "name"],
        include: User
    })

    // Format the db response and return as one array
    userNamesArr = users.map(user => ({
        user: true,
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
    }))
    songNamesArr = songs.map(song => ({
        user: false,
        id: song.id,
        name: `${song.name}: ${song.User.firstName} ${song.User.lastName}`,
    }))

    return res.json([...userNamesArr, ...songNamesArr])
}))

router.get('/:query', asyncHandler(async (req, res) => {
    const { query } = req.params;

    const artists = await User.findAll({
        // where query matches artist first or last name, case insensitive
        where: {
            [Op.or]: [
                sequelize.where(
                    sequelize.fn('lower', sequelize.col('firstName')),
                    { [Op.like]: `%${query.toLowerCase()}%` }
                ),
                sequelize.where(
                    sequelize.fn('lower', sequelize.col('lastName')),
                    { [Op.like]: `%${query.toLowerCase()}%` }
                ),
            ]
        },
    })

    const tracks = await Track.findAll({
        // where query matches track name, case insensitive
        where:
            sequelize.where(
                sequelize.fn('lower', sequelize.col('name')),
                { [Op.like]: `%${query.toLowerCase()}%` }
            ),
        include: User
    })

    return res.json({ artists, tracks })
}))

module.exports = router;