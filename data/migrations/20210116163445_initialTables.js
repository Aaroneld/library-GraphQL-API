exports.up = function (knex) {
    return knex.schema
        .createTable("publishers", (t) => {
            t.increments();
            t.string("name", 60).notNullable();
        })
        .createTable("authors", (t) => {
            t.increments();
            t.string("firstName", 70).notNullable();
            t.string("lastName", 70).notNullable();
            t.string("penName", 120);
            t.string("dob", 20).notNullable();
            t.string("country", "2").notNullable();
            t.string("state", 2);
        })
        .createTable("members", (t) => {
            t.increments();
            t.string("firstName", 70).notNullable();
            t.string("lastName", 70).notNullable();
            t.string("dob", 20).notNullable();
        })
        .createTable("awards", (t) => {
            t.increments();
            t.string("type");
        })
        .createTable("libraries", (t) => {
            t.increments();
            t.string("name", 150).notNullable().unique();
            t.string("state", 2).notNullable();
            t.string("city", 255).notNullable();
            t.string("streetAddress", 255).notNullable();
            t.integer("allowedLoans", 30).notNullable();
        })
        .createTable("librarians", (t) => {
            t.increments();
            t.string("firstName", 70).notNullable();
            t.string("lastName", 70).notNullable();
            t.string("dob", 20).notNullable();
            t.integer("salary").notNullable();
            t.integer("libraryId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("libraries")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("books", (t) => {
            t.increments();
            t.string("title", 255).notNullable();
            t.string("isbn").notNullable().unique();
            t.string("yearWritten", 4);
            t.string("genre").notNullable();
            t.integer("authorId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("authors")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("publisherId")
                .unsigned()

                .references("id")
                .inTable("publishers")
                .onUpdate("RESTRICT")
                .onDelete("RESTRICT");
        })
        .createTable("bookAwards", (t) => {
            t.integer("bookId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("books")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("awardId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("awards")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.primary(["bookId", "awardId"]);
        })
        .createTable("authorAwards", (t) => {
            t.integer("authorId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("authors")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("awardId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("awards")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.primary(["authorId", "awardId"]);
        })
        .createTable("libraryBooks", (t) => {
            t.integer("libraryId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("libraries")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("bookId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("books")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.primary(["libraryId", "bookId"]);
            t.integer("quantity").notNullable();
            t.integer("loaned").notNullable();
        })
        .createTable("loanedBooks", (t) => {
            t.integer("libraryId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("libraries")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("bookId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("books")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.integer("memberId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("members")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            t.primary(["libraryId", "bookId", "memberId"]);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("loanedBooks")
        .dropTableIfExists("libraryBooks")
        .dropTableIfExists("authorAwards")
        .dropTableIfExists("bookAwards")
        .dropTableIfExists("books")
        .dropTableIfExists("librarians")
        .dropTableIfExists("libraries")
        .dropTableIfExists("awards")
        .dropTableIfExists("members")
        .dropTableIfExists("authors")
        .dropTableIfExists("publishers");
};
