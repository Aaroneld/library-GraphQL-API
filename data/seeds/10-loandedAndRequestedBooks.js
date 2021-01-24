const books = require("./test-data/books");
const faker = require("faker");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("loanedAndRequestedBooks")
        .del()
        .then(function () {
            let testLoanedAndRequestedBooks = [];

            /*
            statuses:
            REQUESTED
            LOANED
            RETURNED
            */

            testLoanedAndRequestedBooks.unshift({
                libraryId: 0,
                bookId: books.length,
                memberId: Math.floor(Math.random() * 30),
                requestStatus: "LOANED",
                timeRequested: faker.fake("{{date.past}}"),
            });

            testLoanedAndRequestedBooks.unshift({
                libraryId: 1,
                bookId: books.length - 1,
                memberId: Math.floor(Math.random() * 30),
                requestStatus: "REQUESTED",
                timeRequested: faker.fake("{{date.past}}"),
            });

            testLoanedAndRequestedBooks.unshift({
                libraryId: 2,
                bookId: books.length - 2,
                memberId: Math.floor(Math.random() * 30),
                requestStatus: "RETURNED",
                timeRequested: faker.fake("{{date.past}}"),
            });

            return knex("loanedAndRequestedBooks").insert(
                testLoanedAndRequestedBooks
            );
        });
};
