const db = require("../data/index");
const utilities = require("./utilities");

const findAllBooks = () => utilities.find("books");

const findBooksBy = (params) => utilities.findBy("books", params);

const findBookAwards = (bookId) =>
    utilities
        .find("awards as a")
        .where({ bookId })
        .join("bookAwards as ba", { "a.id": "ba.awardId" })
        .select("a.id", "a.type");

const findBookLibraries = (bookId) =>
    utilities
        .find("libraries as l")
        .where({ bookId })
        .join("libraryBooks as lb", { "l.id": "lb.libraryId" })
        .select("quantity", "loaned", "l.id");

module.exports = {
    findAllBooks,
    findBooksBy,
    findBookAwards,
    findBookLibraries,
};
