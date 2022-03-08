/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('astrology').del()
  await knex('astrology').insert([
    {sign: 'Aquarius'},
    {sign: 'Pisces'},
    {sign: 'Aries'},
    {sign: 'Taurus'},
    {sign: 'Gemini'},
    {sign: 'Cancer'},
    {sign: 'Leo'},
    {sign: 'Virgo'},
    {sign: 'Libra'},
    {sign: 'Scorpius'},
    {sign: 'Sagittarius'},
    {sign: 'Capricornus'}
  ]);
};
