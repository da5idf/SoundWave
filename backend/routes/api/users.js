const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

// Validate sign up
const validateSignup = [
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.get('/',
    asyncHandler(async (req, res) => {
        const users = await User.findAll();
        return res.json(users)
    })
);

router.post('/',
    singleMulterUpload("profileImage"),
    validateSignup,
    asyncHandler(async (req, res) => {
        const { username, email, firstName, lastName, password } = req.body;

        let profileImageUrl;
        if (req.file) {
            profileImageUrl = await singlePublicFileUpload(req.file);
        } else profileImageUrl = "";

        const user = await User.signup({ username, email, firstName, profileImageUrl, lastName, password })

        if (user) {
            setTokenCookie(res, user)
            return res.send({ user });
        }
    })
);

module.exports = router;