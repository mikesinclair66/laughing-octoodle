const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

// Register CORS
fastify.register(cors, {
    // put your options here
})

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 5000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
