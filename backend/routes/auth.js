const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const User = require('../schemas/user');

const authController = require('../controllers/authController');

router.post('/signup', [
    body('username').isLength({min: 5, max: 255}),
    body('email').isEmail().custom(async (email) => {
        const userResult = await User.findOne({email: email});
        if(userResult) {
            throw new Error();
        }
    }).withMessage({message: 'This email already exist.', errorCode: 'email.exists'}),
    body('password').isLength({min: 5, max: 64})
], authController.signup);


router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 64})
], authController.login);

router.post('/google/login', authController.loginWithGoogle);

router.post('/logout', authController.logout);

router.post('/refresh', authController.refresh);

module.exports = router;
