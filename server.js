const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8080;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'produtos',
  password: 'trabDocker',
  port: 5432,
});

app.get('/', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM produto');
    res.send(result.rows);
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
