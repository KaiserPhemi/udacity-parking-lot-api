import { Knex } from "knex";

/**
 * Create table
 * @param knex 
 * @returns 
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', table => {
    table.increments('id').primary();
    table.string('registration_no').notNullable().unique();
    table.string('brand').notNullable();
    table.string('model').notNullable();
    table.string('owner_email').notNullable();
    table.foreign('owner_email').references('email').inTable('all_users');
    table.timestamps(true, true);
  })
}

/**
 * Drop table
 * @param knex 
 * @returns 
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropSchemaIfExists('cars');
}

