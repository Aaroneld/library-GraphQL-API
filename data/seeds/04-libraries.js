const faker = require("faker");
const libraries = require("./test-data/libraries");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("libraries")
        .del()
        .then(function () {
            const testLibraries = libraries.map((library, index) => ({
                id: index,
                name: library,
                state: faker.fake("{{address.stateAbbr}}"),
                city: faker.fake("{{address.city}}"),
                streetAddress: faker.fake("{{address.streetAddress}}"),
                allowedLoans: Math.floor(Math.random() * 11),
            }));

            return knex("libraries").insert(testLibraries);
        });
};
