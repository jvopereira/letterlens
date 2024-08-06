const fastify = require('./app');
const { fastifyPort } = require('./config/config');

/**
 * Start Fastify server
 */
fastify.listen(fastifyPort, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});