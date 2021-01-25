const utilities = require("./utilities");
const db = require("../data/index");
const { libraries } = require(".");

const findAllLibraries = () => utilities.find("libraries");

const findLibrariesBy = (params) => utilities.findBy("libraries", params);

const findLibraryBooks = (params) =>
    utilities
        .findBy("libraryBooks as lb", params)
        .select("quantity", "loaned", "bookId");

module.exports = { findAllLibraries, findLibrariesBy, findLibraryBooks };
