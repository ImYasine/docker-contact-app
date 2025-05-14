const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'docker',
  host: process.env.DB_HOST || 'pgsql',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'docker',
  port: 5432
});

module.exports = pool;