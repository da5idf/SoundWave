const express = require('express')
const Vibrant = require('node-vibrant');
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload } = require('../../awsS3');

const { Track, User, Comment, Genre } = require('../../db/models');
const { toTitleCase } = require('../../utils/functions.js')

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const tracks = await Track.findAll({
            include: [User, Comment, Genre],
        });
        return res.json(tracks);
    })
)

router.get('/top12',
    asyncHandler(async (req, res) => {
        const tracks = await Track.findAll({
            include: [User, Comment, Genre],
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 12
        });
        return res.json(tracks);
    })
)

router.get('/:trackId',
    asyncHandler(async (req, res) => {
        const trackId = req.params.trackId;
        const track = await Track.findOne({
            where: { id: trackId },
            include: [User, Comment, Genre]
        });

        return res.json(track);
    })
)

router.get('/:trackId/comments',
    asyncHandler(async (req, res) => {
        const trackId = req.params.trackId;
        const comments = await Comment.findAll({
            where: { trackId },
            include: [User]
        })
        return res.json(comments);
    })
)

router.post('/',
    multipleMulterUpload("files"),
    asyncHandler(async (req, res) => {
        const { name, userId, description } = req.body;

        // If given genre in DB -> use exisiting genreId
        // Else, create a new genre and use new genreId
        let { genre } = req.body;
        genre = await Genre.findOrCreate({
            where: { name: toTitleCase(genre) }
        })
        const genreId = genre[0].id

        const url = await singlePublicFileUpload(req.files[0]);

        let track;
        let albumArt;
        if (req.files[1]) {
            albumArt = await singlePublicFileUpload(req.files[1]);

            // get color palette
            let opts = { colorCount: 10 }
            const fullPalette = await Vibrant.from(albumArt, opts).getPalette().then(palette => palette);
            const palette = `${fullPalette.LightMuted.hex} ${fullPalette.Vibrant.hex}`;

            track = await Track.create({ name, userId, genreId, url, albumArt, description, palette });
        } else {
            track = await Track.create({ name, userId, genreId, url, description });
        }


        const newTrack = await Track.findByPk(track.id, {
            include: [User, Comment, Genre]
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