const utilities = require("./utilities");
const db = require("../data/index");

const findAllLibraries = () => utilities.find("libraries");

const findLibrariesBy = (params) => utilities.findBy("libraries", params);

module.exports = { findAllLibraries, findLibrariesBy };
