// third-party libraries
import { Knex } from "knex";

/**
 * Create table
 * @param knex 
 * @returns 
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('all_users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('phone_number').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  })
}

/**
 * Rollback
 * @param knex 
 * @returns 
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('all_users');
}

