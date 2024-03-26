const express = require('express');
const router = express.Router();
const passport = require('../middlewares/passports');

const puzzlesController = require('../controllers/puzzlesController');

router.get('/puzzles/:topicId', passport.authenticate('jwt', {session: false}), puzzlesController.getPuzzles);

router.post('/gameresult', passport.authenticate('jwt', {session: false}), puzzlesController.postGameResult);

module.exports = router;