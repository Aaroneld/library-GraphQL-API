const utilities = require("./utilities");
const db = require("../data/index");

const findAllAuthors = () => utilities.find("authors");

const findAuthorsBy = (params) => utilities.findBy("authors", params);

const findAuthorAwards = (params) => {
    return utilities
        .findBy("authorAwards as aa", params)
        .join("awards as a", { "aa.awardId": "a.id" })
        .select("a.id", "a.type");
};

module.exports = { findAllAuthors, findAuthorsBy, findAuthorAwards };
