const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { verifyCredentials, generateUserAchies, getTokens } = require('../services/authService');

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
                res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' });
                res.status(200).send({ accessToken: tokens.accessToken });
            } else {
                res.status(403).send();
            }
        } else {
            res.status(403).send();
        }
    }
    catch(err) {
        console.log(err);
        //todo: hibakezelés
    }
}

async function loginWithGoogle(req, res, next) {
    const googleToken = req.body.googleToken;
    try{
        const payload = await verifyCredentials(googleToken);
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
        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' });
        res.status(200).send({ accessToken: tokens.accessToken });
    }
    catch(err) {
        console.log(err);
        res.sendStatus(403);
    }
}

function logout(req, res, next) {
    res.clearCookie('refreshToken');
    res.status(200).send();
}

function refresh(req, res, next) {
    const oldRefreshToken = req.cookies.refreshToken;
    jwt.verify(oldRefreshToken, 'kutyacica', (err, payload) => {
        if(err) {
           return res.status(403).send();
        }
        jwt.sign(payload, 'cicakutya', { expiresIn: '2h' }, (err, accessToken) => {
            if(err) {
                throw new Error(err);
            }
            jwt.sign(payload, 'kutyacica', { expiresIn: '1d' }, (err, refreshToken) => {
                if(err) {
                    throw new Error(err);
                }
                res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' });
                res.status(200).send({ accessToken: accessToken });
            });
        });
    });
} 

module.exports = { signup, login, loginWithGoogle, logout, refresh };