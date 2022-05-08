const express = require('express')
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

const { Track, User, Comment } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const tracks = await Track.findAll({
            include: [User, Comment]
        });
        return res.json(tracks);
    })
)

router.get('/:trackId/comments',
    asyncHandler(async (req, res) => {
        const trackId = req.params.trackId;
        const comments = await Comment.findAll({
            include: [User],
            where: { trackId }
        })
        return res.json(comments);
    })
)

router.post('/',
    singleMulterUpload("url"),
    asyncHandler(async (req, res) => {
        const { name, userId, description } = req.body;
        url = await singlePublicFileUpload(req.file);

        const track = await Track.create({ name, userId, url, description });

        const newTrack = await Track.findByPk(track.id, {
            include: [User, Comment]
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

        const track = await Track.findOne({
            where: { id: trackId },
            include: [User]
        });

        if (track) {
            if (name) track.name = name;
            if (description) track.description = description;
            if (url) track.url = url;

            await track.save();

            return res.json(track);
        }
    })
)

router.delete("/:trackId",
    asyncHandler(async (req, res) => {
        const trackId = req.params.trackId;
        const track = await Track.findOne({
            where: { id: trackId },
            include: [Comment]
        });

        for (let comment of track.Comments) {
            await comment.destroy();
        }

        if (track) {
            await track.destroy();

            return res.json('track deleted')
        }
    })
)

module.exports = router;