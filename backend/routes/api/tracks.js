const express = require('express')
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

const { Track, User } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const tracks = await Track.findAll({
            include: [User]
        });
        return res.json(tracks);
    })
)

router.post('/',
    singleMulterUpload("url"),
    asyncHandler(async (req, res) => {
        const { name, userId, description } = req.body;
        const url = await singlePublicFileUpload(req.file);

        const track = await Track.create({ name, userId, url, description });

        const newTrack = await Track.findByPk(track.id, {
            include: [User]
        });

        return res.json(newTrack);
    })
);

router.put("/:trackId",
    singleMulterUpload("url"),
    asyncHandler(async (req, res) => {

        const { name, description } = req.body;
        const trackId = req.params.trackId;

        let url;
        try {
            url = await singlePublicFileUpload(req.file);
        } catch (e) {

        }

        const track = await Track.findByPk(trackId);

        if (track) {
            if (name) track.name = name;
            if (description) track.description = description;
            if (url) track.url = url;

            await track.save();

            return res.json(track);
        }
    })
)

router.put("/:trackId/albumArt",
    singleMulterUpload("albumArt"),
    asyncHandler(async (req, res) => {
        console.log("************************** inside PUT ROUTE?")
        const trackId = req.params.trackId;

        const albumArt = await singlePublicFileUpload(req.file);

        const track = await Track.findByPk(trackId);
        if (track) {
            track.albumArt = albumArt;

            await track.save();

            return res.json(track);
        }
    })
)

router.delete("/:trackId",
    asyncHandler(async (req, res) => {
        const trackId = req.params.trackId;
        const track = await Track.findByPk(trackId);

        if (track) {
            await track.destroy();

            return res.json('track deleted')
        }
    })
)

// router.get('/:trackId/favicon.png', (req, res) => {
//     res.json({ message: "success" })
// });

// router.get('/:trackId/favicon.ico', (req, res) => {
//     res.json({ message: "success" })
// });

module.exports = router;