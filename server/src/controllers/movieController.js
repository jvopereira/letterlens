const axios = require('axios');
const { pythonApiUrl } = require('../config/config');
const { generateToken } = require('../utils/jwt')

/**
 * Fetch popular movies from Python API
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getPopularMovies(req, res) {
  try {
    const response = await axios.get(
      `${pythonApiUrl}/backend/movies/popular`, 
      {
        headers: {
          'Authorization': `Bearer ${generateToken(req.query.email)}`
        }
      }
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getPopularMovies };