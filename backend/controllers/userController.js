const User = require('../schemas/user');

async function getUser(req, res, next) {
    const user = await User.findOne({ email: req.user.email}).populate('achievements.achieId');
    res.send(user);
}

module.exports = { getUser };