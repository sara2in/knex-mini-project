/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    { make: 'Bentley', model: 'Continental', color: 'black', is_smart_car: false },
    { make: 'Land Rover', model: 'Velar', color: 'grey', is_smart_car: false },
    { make: 'Subaru', model: 'Impreza', color: 'blue', is_smart_car: false },
    { make: 'Rivian', model: 'R1T', color: 'Yellow', is_smart_car: true },
    { make: 'Jaguar', model: 'E-Pace', color: 'green', is_smart_car: true },
  ]);
};
