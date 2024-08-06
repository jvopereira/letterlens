const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

/**
 * Generate a JWT token
 * @param {Object} payload - The payload to encode
 * @returns {string} - The generated JWT token
 */
function generateToken(payload) {
  return jwt.sign(payload, jwtSecret, { algorithm: 'HS256' });
}

module.exports = { generateToken };