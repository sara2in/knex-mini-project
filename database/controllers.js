
const knex = require("./dbConnection");

module.exports = {
    getAllBirthdays: () => {
        return knex.select("*").from("birthdays");
    },
    getBirthdayByName: (paramName) => {
        return knex.select("*").from("birthdays").where({name: paramName});
    },
    getBirthdayBySign: (sign) => {
        return knex("astrology").where("astrology.sign", sign).join("birthdays", "birthdays.astrology_id", "astrology.id");
    },
    postBirthday: (req) => {
        return knex.insert({ 
            name: req.body.name, 
            birthday: req.body.birthday, 
            party_this_year: req.body.party_this_year, 
            astrology_id: req.body.astrology_id, 
            zodiac_id: req.body.zodiac_id 
        }).from('birthdays')
    },
    replaceBirthday: (paramName, body) => {
        return knex.select("*").from("birthdays").where({name: paramName})
        .update({ 
            name: body.name, 
            birthday: body.birthday, 
            party_this_year: body.party_this_year, 
            astrology_id: body.astrology_id, 
            zodiac_id: body.zodiac_id
        });
    },
    removeBirthday: (paramName) => {
      return knex.select("*").from("birthdays").where({name: paramName}).del();
  },
}

