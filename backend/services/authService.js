const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const Achievement = require('../schemas/achievement');

async function verifyGoogleToken(token) {
  client.setCredentials({access_token: token});
  const userInfo = await client.request({
    url: "https://www.googleapis.com/oauth2/v3/userinfo"
  });
  return userInfo.data;
    /*const ticket = await client.verifyIdToken({
      idToken: token,
    });
    const payload = ticket.getPayload();
    return payload;*/
}

async function generateUserAchies() {
  const achies = await Achievement.find();
  const userAchies = achies.map((achie) => {
    return {
      achieId: achie._id,
      isUnlocked: false
    }
  });
  return userAchies;
}

function getTokens(email) {
  return new Promise((resolve, reject) => {
    jwt.sign({email: email}, process.env.SECRET, { expiresIn: '2h' }, (err, accessToken) => {
      if(err) {
        reject(err);
      }
      jwt.sign({email: email}, process.env.REFRESH_SECRET, { expiresIn: '1d' }, (err, refreshToken) => {
          if(err) {
            reject(err);
          }
          resolve({accessToken, refreshToken});
      });
  });
  });
}

module.exports = { verifyGoogleToken, generateUserAchies, getTokens };