const { request } = require("express");

const books = require("./test-data/books");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("bookAwards")
        .del()
        .then(function () {
            // Inserts seed entries

            let testBookAwards = [];

            for (let i = 0; i < books.length; i++) {
                testBookAwards.push({
                    bookId: i,
                    awardId: Math.ceil(Math.random() * 10),
                });
            }

            return knex("bookAwards").insert(testBookAwards);
        });
};
