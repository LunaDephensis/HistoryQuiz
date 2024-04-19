const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
};

passport.use(new JwtStrategy(options, (payload, done) => {
    return done(null, { email: payload.email });
}));

module.exports = passport;