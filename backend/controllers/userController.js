const User = require('../schemas/user');

async function getUser(req, res, next) {
    try {
        const user = await User.findOne({ email: req.user.email}).populate('achievements.achieId');
        res.send(user);
    }
    catch(err) {
        next(err);
    }
}

module.exports = { getUser };