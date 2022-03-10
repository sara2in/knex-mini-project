/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema
    .createTable('cars', table => {
      table.increments('id');
      table.string('make');
      table.string('model');
      table.string('color');
      table.boolean('is_smart_car');
    })
    .table('birthdays', table => {
      table.integer('car_id').references('id').inTable('cars').onDelete('cascade');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .alterTable('birthdays', table => {
    table.dropColumn('car_id');
  })
    .dropTableIfExists('cars');
};
