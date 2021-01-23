const books = require("./test-data/books");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("authorAwards")
        .del()
        .then(function () {
            let testAuthorAwards = [];

            for (let i = 0; i < books.length; i++) {
                testAuthorAwards.push({
                    authorId: i,
                    awardId: Math.ceil(Math.random() * 10),
                });
            }
            return knex("authorAwards").insert(testAuthorAwards);
        });
};
