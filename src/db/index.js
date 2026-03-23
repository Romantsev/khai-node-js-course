const { drizzle } = require('drizzle-orm/node-postgres');

const { Client } = require('pg');

const schema = require('./schema');

const client = new Client({

   host: '127.0.0.1',

   port: Number(process.env.DB_PORT) || 5433,

   user: 'nodejs_course_admin',

   password: 'my_password',

   database: 'nodejs_course_database',

   ssl: false,

});

client.connect();

module.exports = drizzle(client, { schema });
