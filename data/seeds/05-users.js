const faker = require("faker");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function () {
            // Inserts seed entries

            const testUsers = [];

            for (let i = 0; i < 30; i++) {
                testUsers.push({
                    id: i,
                    firstName: faker.fake("{{name.firstName}}"),
                    lastName: faker.fake("{{name.lastName}}"),
                    dob: faker.fake("{{date.past}}"),
                    username: faker.fake("{{internet.userName}}"),
                    password: faker.fake("{{internet.password}}"),
                    libraryId: Math.floor(Math.random() * 18),
                });
            }

            return knex("users").insert(testUsers);
        });
};
