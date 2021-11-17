// Update with your config settings.
const dbConfig: { [key: string]: any } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 50,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default dbConfig;

