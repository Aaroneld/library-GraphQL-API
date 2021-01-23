const faker = require("faker");
const books = require("./test-data/books");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("books")
        .del()
        .then(function () {
            const genres = [
                "fantasy",
                "science fiction",
                "non-fiction",
                "historical fiction",
                "young adult",
                "dystopian",
            ];

            testBooks = books.map((book, index) => ({
                id: index,
                title: book.title,
                isbn: book.isbn,
                yearWritten: book.published.split("-")[0],
                genre: genres[Math.floor(Math.random() * genres.length)],
                authorId: index,
                publisherId: Math.ceil(Math.random() * 3),
            }));

            return knex("books").insert(testBooks);
        });
};
