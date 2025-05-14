const fastify = require('fastify')({ logger: true });
const pool = require('./db');

// fastify.register(require('@fastify/formbody'));

fastify.post('/contact', async (request, reply) => {
  const { name, email, phone, message, budget } = request.body;

  try {
    await pool.query(
      'INSERT INTO contact_submissions (name, email, phone, message, budget) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, message, budget]
    );
    reply.code(201).send({ message: 'Contact form saved successfully!' });
  } catch (err) {
    console.error('Database error:', err);
    reply.code(500).send({ error: 'Failed to save contact form' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();