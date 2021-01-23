exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("awards")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("awards").insert([
                { id: 1, type: "Booker Prize" },
                { id: 2, type: "Caldecott Medal" },
                { id: 3, type: "National Book Award" },
                { id: 4, type: "National Book Critics Award" },
                { id: 5, type: "Newbery Medal" },
                { id: 6, type: "Nobel Prize for Literature" },
                { id: 7, type: "PEN/Faulkner Award" },
                { id: 8, type: "Pulitzer Prize" },
                { id: 9, type: "Commonwealth Writers' Prize" },
                { id: 10, type: "EMMA Awards" },
            ]);
        });
};
