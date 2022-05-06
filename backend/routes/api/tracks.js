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
        url = await singlePublicFileUpload(req.file);

        const track = await Track.create({ name, userId, url, description })
        return res.send({ track });
    })
);

router.put("/:trackId",
    asyncHandler(async (req, res) => {
        const { name, description } = req.body;
        const trackId = req.params.trackId;

        const track = await Track.findByPk(trackId);

        if (track) {
            if (name) track.name = name;
            if (description) track.description = description;

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

module.exports = router;