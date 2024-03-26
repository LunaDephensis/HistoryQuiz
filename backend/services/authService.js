const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("785933032147-qnthgqpg1hat7e4hior5hhuoilo2gj4i.apps.googleusercontent.com");

const Achievement = require('../schemas/achievement');

async function verifyCredentials(credential) {
    const ticket = await client.verifyIdToken({
      idToken: credential,
    });
    const payload = ticket.getPayload();
    return payload;
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
    jwt.sign({email: email}, 'cicakutya', { expiresIn: '2h' }, (err, accessToken) => {
      if(err) {
        reject(err);
      }
      jwt.sign({email: email}, 'kutyacica', { expiresIn: '1d' }, (err, refreshToken) => {
          if(err) {
            reject(err);
          }
          resolve({accessToken, refreshToken});
      });
  });
  });
}

module.exports = { verifyCredentials, generateUserAchies, getTokens };