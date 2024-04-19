const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { verifyGoogleToken, generateUserAchies, getTokens } = require('../services/authService');

const User = require('../schemas/user');

async function signup(req, res, next) {
    const valResult = validationResult(req);
    if(!valResult.isEmpty()) {
        return res.status(400).send(valResult.array());
    }
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userAchies = await generateUserAchies();
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

async function login(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            const isMatched = await bcrypt.compare(req.body.password, user.password);
            if(isMatched) {
                const tokens = await getTokens(req.body.email);
                res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, secure: true, sameSite: 'none' });
                res.status(200).send({ accessToken: tokens.accessToken, username: user.name });
            } else {
                res.status(403).send();
            }
        } else {
            res.status(403).send();
        }
    }
    catch(err) {
        next(err);
    }
}

async function loginWithGoogle(req, res, next) {
    const googleToken = req.body.googleToken;
    try{
        const payload = await verifyGoogleToken(googleToken);
        const email = payload.email;
        const name = payload.name;
        const user = await User.findOne({email: email});
        if(!user) {
            const userAchies = await generateUserAchies();
            await User.create(
                {
                    name: name,
                    email: email,
                    allStars: 0,
                    lastResults: [],
                    achievements: userAchies
                }
            );
        }
        const tokens = await getTokens(email);
        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, secure: true, sameSite: 'none' });
        res.status(200).send({ accessToken: tokens.accessToken, username: name });
    }
    catch(err) {
        next(err);
    }
}

function logout(req, res, next) {
    res.clearCookie('refreshToken', { httpOnly: true, secure: true, sameSite: 'none' });
    res.status(200).send();
}

function refresh(req, res, next) {
    const oldRefreshToken = req.cookies.refreshToken;
    jwt.verify(oldRefreshToken, process.env.REFRESH_SECRET, async (err, payload) => {
        if(err) {
           return res.status(403).send();
        }
        const user = await User.findOne({ email: payload.email });
        const tokens = await getTokens(payload.email);
        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, secure: true, sameSite: 'none' });
        res.status(200).send({ accessToken: tokens.accessToken, username: user.name });
    });
} 

module.exports = { signup, login, loginWithGoogle, logout, refresh };