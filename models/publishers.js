const utilities = require("./utilities");
const db = require("../data/index");

const findAllPublishers = () => utilities.find("publishers");

const findPublishersBy = (params) => utilities.findBy("publishers", params);

module.exports = { findAllPublishers, findPublishersBy };
