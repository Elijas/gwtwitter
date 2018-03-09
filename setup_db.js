const pg = require('pg');
const connectionString = process.env.DATABASE_URL;

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE properties (\n' +
    '    id SERIAL PRIMARY KEY,\n' +
    '    token1 TEXT,\n' +
    '    token2 TEXT\n' +
    ');');
