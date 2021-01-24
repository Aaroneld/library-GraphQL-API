const utilities = require("./utilities");

const findAllAwards = () => utilities.find("awards");

const findAwardsBy = (params) => utilities.findBy("awards", params);

module.exports = { findAllAwards, findAwardsBy };
