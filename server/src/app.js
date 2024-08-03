const axios = require('axios');
const cors = require('@fastify/cors')

const port = 3000;
const fastify = require('fastify')({
  logger: true
})
fastify.register(cors)

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/movies', async (request, reply) => {
  try {
    const response = await axios.get('http://localhost:8000/random-movies');
    return response.data
  } catch (error) {
      fastify.log.error(err)
      return {error: 'error'}
  }
})

const start = async () => {
  try {
    await fastify.listen({ port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()