const db = require("../data/");

const findBy = (table, params) => db(table).where(params);

const find = (table) => db(table);

module.exports = { find, findBy };
