/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import knex from 'knex';
import config from '../knexfile';

const environment: string = process.env.NODE_ENV || "development";
const db = knex(config[environment]);

export default db;
