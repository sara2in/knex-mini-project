
const knex = require("./dbConnection");

module.exports = {
    getAllBirthdays: () => {
        return knex.select("*").from("birthdays");
    },
    handleQueries: (query) => {
        return knex.select("*").from("birthdays").where(query);
    },
    getBirthdayByName: (paramName) => {
        return knex.select("*").from("birthdays").where({name: paramName});
    },
    getBirthdayBySign: (sign) => {
        return knex("astrology").where("astrology.sign", sign).join("birthdays", "birthdays.astrology_id", "astrology.id");
    },
    postBirthday: (body) => {
        return knex.insert(body).from('birthdays')
    },
    replaceBirthday: (paramName, body) => {
        return knex.select("*").from("birthdays").where({name: paramName})
        .update(body);
    },
    removeBirthday: (paramName) => {
      return knex.select("*").from("birthdays").where({name: paramName}).del();
  },
}

