const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { User, Track } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {

    const users = await User.findAll({
        attributes: ["firstName", "lastName"]
    })


    const songs = await Track.findAll({
        attributes: ["name"]
    })

    /*
    MIGHT WANT TO REFORMAT THE RESPONSE TO
    [
        {ID: URL, NAME}
        EX {1: TRACKS/1, SONG NAME}
    ]
    SO THAT THE LINK THAT GET RENDERED DURING SEARCH CAN KEY INTO THE URL COMPONENT
    OF THIS RETURN OBJ
    */

    // Format the db response and return as one array
    userNamesArr = users.map(user => `${user.firstName} ${user.lastName}`)
    songNamesArr = songs.map(song => `${song.name}`)

    return res.json([...userNamesArr, ...songNamesArr])
}))

module.exports = router;