/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('birthdays').del()
  await knex('birthdays').insert([
    {name: 'Keanu Reeves', birthday: "1964-09-02", party_this_year: false, astrology_id: 8, zodiac_id: 3},
    {name: 'Samuel L Jackson', birthday: "1948-12-21", party_this_year: true, astrology_id: 11, zodiac_id: 11},
    {name: 'Tom Holland', birthday: "1996-06-01", party_this_year: true, astrology_id: 5, zodiac_id: 11},
    {name: 'Guillermo del Toro', birthday: "1964-10-09", party_this_year: false, astrology_id: 9, zodiac_id: 3},
    {name: 'Natalie Portman', birthday: "1981-06-09", party_this_year: false, astrology_id: 5, zodiac_id: 7},
    {name: 'Robert Downey Jr.', birthday: "1965-04-04", party_this_year: true, astrology_id: 4, zodiac_id: 3},
    {name: 'Halla Berry', birthday: "1966-08-14", party_this_year: true, astrology_id: 7, zodiac_id: 5},
    {name: 'Will  Smith', birthday: "1968-09-25", party_this_year: true, astrology_id: 9, zodiac_id: 7},
    {name: 'Keith David', birthday: "1956-06-04", party_this_year: false, astrology_id: 5, zodiac_id: 7},
    {name: 'Awkwafina', birthday: "1988-06-02", party_this_year: true, astrology_id: 5, zodiac_id: 3}
  ]);
};