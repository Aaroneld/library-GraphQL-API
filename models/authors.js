const utilities = require("./utilities");
const db = require("../data/index");

const findAllAuthors = () => utilities.find("authors");

const findAuthorsBy = (params) => utilities.findBy("authors", params);

module.exports = { findAllAuthors, findAuthorsBy };
