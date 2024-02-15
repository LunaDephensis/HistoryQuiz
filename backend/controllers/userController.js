const bcrypt = require('bcrypt');

const User = require('../schemas/user');
const Achievement = require('../schemas/achievement');

async function Signup(req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const achies = await Achievement.find();
        const userAchies = achies.map((achie) => {
            return {
                achieId: achie._id,
                isUnlocked: false
            }
        });

        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({
            name: username,
            email: email,
            password: hashedPassword,
            allStars: 0,
            lastResults: [],
            achievements: userAchies
        });

        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports = { Signup };