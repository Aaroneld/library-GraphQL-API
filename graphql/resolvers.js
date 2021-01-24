const { books, authors, awards, libraries } = require("../models");

const resolvers = {
    Query: {
        hello: () => "hello",
        Books: async (_, args) => {
            if (args.queryParams) {
                return await books.findBooksBy(args.queryParams);
            }
            return await books.findAllBooks();
        },
    },
    Book: {
        Author: async (args) =>
            await authors
                .findAuthorsBy({
                    id: args.authorId,
                })
                .first(),
        Awards: async (args) => await books.findBookAwards(args.id),
        Libraries: async (args) => await books.findBookLibraries(args.id),
    },
    LibraryBookInformation: {
        Library: async (args) =>
            await libraries.findLibrariesBy({ id: args.id }).first(),
    },
};

module.exports = resolvers;
