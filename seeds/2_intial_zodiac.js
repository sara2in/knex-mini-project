/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('zodiac').del()
  await knex('zodiac').insert([
      {zodiac_animal: 'Tiger'},
      {zodiac_animal: 'Rabbit'},
      {zodiac_animal: 'Dragon'},
      {zodiac_animal: 'Snake'},
      {zodiac_animal: 'Horse'},
      {zodiac_animal: 'Goat'},
      {zodiac_animal: 'Monkey'},
      {zodiac_animal: 'Rooster'},
      {zodiac_animal: 'Dog'},
      {zodiac_animal: 'Pig'},
      {zodiac_animal: 'Rat'},
      {zodiac_animal: 'Ox'}
      ]);
    };