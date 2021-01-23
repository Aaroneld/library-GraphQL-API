exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("publishers")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("publishers").insert([
                { id: 1, name: "penguin" },
                { id: 2, name: "calvary" },
                { id: 3, name: "classics" },
            ]);
        });
};
