const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const passport = require('../middlewares/passports');

const User = require('../schemas/user');
const userController = require('../controllers/userController');

router.get('/user', passport.authenticate('jwt', {session: false}), userController.getUser);

module.exports = router;
