const { getPopularMovies } = require('../controllers/movieController');

async function movieRoutes(fastify, options) {
  fastify.get('/live', (req, res) => { res.send({ message: 'Server is live.' });})
  fastify.get('/movies/popular', getPopularMovies);
}

module.exports = movieRoutes;