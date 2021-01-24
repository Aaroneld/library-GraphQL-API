const faker = require("faker");
const libraries = require("./test-data/libraries");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function () {
            // Inserts seed entries

            const testUsers = [];

            for (let i = 1; i < 30; i++) {
                testUsers.push({
                    id: i,
                    firstName: faker.fake("{{name.firstName}}"),
                    lastName: faker.fake("{{name.lastName}}"),
                    dob: faker.fake("{{date.past}}"),
                    username: faker.fake("{{internet.userName}}"),
                    password: faker.fake("{{internet.password}}"),
                    type: "MEMBER",
                });
            }

            for (let i = 1; i < 30; i++) {
                testUsers.push({
                    id: i + 30,
                    firstName: faker.fake("{{name.firstName}}"),
                    lastName: faker.fake("{{name.lastName}}"),
                    dob: faker.fake("{{date.past}}"),
                    username: faker.fake("{{internet.userName}}"),
                    password: faker.fake("{{internet.password}}"),
                    libraryID: Math.floor(Math.random() * libraries.length),
                    type: "LIBRARIAN",
                });
            }

            testUsers.unshift({
                id: 0,
                firstName: faker.fake("{{name.firstName}}"),
                lastName: faker.fake("{{name.lastName}}"),
                dob: faker.fake("{{date.past}}"),
                username: faker.fake("{{internet.userName}}"),
                password: faker.fake("{{internet.password}}"),
                type: "ADMIN",
            });

            return knex("users").insert(testUsers);
        });
};
