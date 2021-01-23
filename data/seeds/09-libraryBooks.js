const libraries = require("./test-data/libraries");
const books = require("./test-data/books");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("libraryBooks")
        .del()
        .then(function () {
            // Inserts seed entries

            const testLibraryBooks = [];

            for (let i = 1; i <= libraries.length; i++) {
                testLibraryBooks.push({
                    libraryId: i,
                    bookId: Math.ceil(Math.random() * books.length),
                    quantity: [3, 4, 5][
                        Math.floor(Math.random() * [3, 4, 5].length)
                    ],
                    loaned: [0, 1, 2][
                        Math.floor(Math.random() * [0, 1, 2].length)
                    ],
                });
            }

            return knex("libraryBooks").insert(testLibraryBooks);
        });
};
