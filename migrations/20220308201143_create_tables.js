/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable('astrology', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('sign').notNullable(); // List of Astrological signs
    })
    .createTable('zodiac', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('zodiac_animal').notNullable(); // List of Zodiac Animals
    })
    .createTable('birthdays', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('name').notNullable();
      table.string('birthday').notNullable();
      table.boolean('party_this_year');
      table.integer('astrology_id').references('id').inTable('astrology').notNullable().onDelete('cascade');
      table.integer('zodiac_id').references('id').inTable('zodiac').notNullable().onDelete('cascade');
      table.timestamps(true, true); // adds created_at and updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('birthdays')
    .dropTableIfExists('astrology')
    .dropTableIfExists('zodiac');
  };