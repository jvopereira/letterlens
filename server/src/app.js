const fastify = require('fastify')();
const movieRoutes = require('./routes/movieRoutes');

/**
 * Register routes and middlewares
 */
fastify.register(movieRoutes);

module.exports = fastify;