const { Client } = require('pg');
async function getConnection() {
  const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client
}

module.exports = getConnection;
