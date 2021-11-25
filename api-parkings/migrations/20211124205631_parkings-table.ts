// third-aprty libraries
import { Knex } from "knex";

/**
 * Create table
 * @param knex 
 * @returns 
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('parkings', table => {
    table.increments('id').primary();
    table.string('car_reg_no').notNullable();
    table.string('owner_email').notNullable();
    table.string('parked_on').notNullable();
    table.string('removed_on');
    table.timestamps(true, true);
  })
}

/**
 * Drop table
 * @param knex 
 * @returns 
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('parkings');
}

