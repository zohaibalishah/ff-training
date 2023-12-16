var jwt = require('jsonwebtoken');

async function generateToken(user) {
  const result = await jwt.sign(user, '8748712462398468');
  return result;
}

async function verifyToken(token) {
  const result = await jwt.verify(token, '8748712462398468');
  return result;
}

module.exports = { generateToken, verifyToken };
