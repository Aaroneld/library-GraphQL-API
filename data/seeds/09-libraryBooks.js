const libraries = require("./test-data/libraries");
const books = require("./test-data/books");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("libraryBooks")
        .del()
        .then(function () {
            // Inserts seed entries

            const testLibraryBooks = [];

            for (let i = 3; i <= libraries.length; i++) {
                testLibraryBooks.push({
                    libraryId: i,
                    bookId: Math.ceil(Math.random() * (books.length - 3)),
                    quantity: [3, 4, 5][Math.floor(Math.random() * 3)],
                    loaned: 0,
                });
            }

            testLibraryBooks.unshift({
                libraryId: 0,
                bookId: books.length,
                quantity: [3, 4, 5][Math.floor(Math.random() * 3)],
                loaned: 1,
            });

            testLibraryBooks.unshift({
                libraryId: 1,
                bookId: books.length - 1,
                quantity: [3, 4, 5][Math.floor(Math.random() * 3)],
                loaned: 0,
            });

            testLibraryBooks.unshift({
                libraryId: 2,
                bookId: books.length - 2,
                quantity: [3, 4, 5][Math.floor(Math.random() * 3)],
                loaned: 1,
            });

            return knex("libraryBooks").insert(testLibraryBooks);
        });
};
