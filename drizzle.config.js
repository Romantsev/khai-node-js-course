export default {
    schema: './src/db/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 5433,
        user: process.env.DB_USER || 'nodejs_course_admin',
        password: process.env.DB_PASSWORD || 'my_password',
        database: process.env.DB_NAME || 'nodejs_course_database',
    },
};
