const faker = require("faker");
const books = require("./test-data/books");
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("authors")
        .del()
        .then(function () {
            // Inserts seed entries

            let testAuthors = [];

            books.forEach((book, index) => {
                testAuthors.push({
                    id: index,
                    firstName: book.author.split(" ")[0],
                    lastName: book.author.split(" ")[1],
                    penName: faker.fake("{{name.firstName}}"),
                    dob: faker.fake("{{date.past}}"),
                    country: faker.fake("{{address.countryCode}}"),
                    state:
                        Math.random > 0.33
                            ? null
                            : faker.fake("{{address.stateAbbr}}"),
                });
            });

            return knex("authors").insert(testAuthors);
        });
};
