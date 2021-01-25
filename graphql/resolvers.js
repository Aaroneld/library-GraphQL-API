const { image } = require("faker");
const {
    books,
    authors,
    awards,
    libraries,
    publisher,
    users,
} = require("../models");

const resolvers = {
    Query: {
        hello: () => "hello",
        Books: async (_, args) => {
            if (args.queryParams) {
                return await books.findBooksBy(args.queryParams);
            }
            return await books.findAllBooks();
        },
        Libraries: async (_, args) => {
            if (args.queryParams) {
                return await libraries.findLibrariesBy(args.queryParams);
            }
            return await libraries.findAllLibraries();
        },
        Authors: async (_, args) => {
            if (args.queryParams) {
                return await authors.findAuthorsBy(args.queryParams);
            }
            return await authors.findAllAuthors();
        },
        Users: async (_, args) => {
            if (args.queryParams) {
                return await users.findUsersBy(args.queryParams);
            }
            return await users.findAllUsers();
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
        Publisher: async (args) =>
            await publisher.findPublishersBy({ id: args.publisherId }).first(),
    },
    Library: {
        Books: async (args) =>
            await libraries.findLibraryBooks({ libraryId: args.id }),
    },
    Author: {
        Books: async (args) => await books.findBooksBy({ authorId: args.id }),
        Awards: async (args) =>
            await authors.findAuthorAwards({ authorId: args.id }),
    },
    LibraryBookInformation: {
        Book: async (args) =>
            await books.findBooksBy({ id: args.bookId }).first(),
    },
    BookLibraryInformation: {
        Library: async (args) =>
            await libraries.findLibrariesBy({ id: args.id }).first(),
    },
    UserType: {
        __resolveType: async (obj) => {
            console.log(obj);
            if (obj.type === "LIBRARIAN") return "Librarian";
            if (obj.type === "MEMBER") return "Member";
            return "Admin";
        },
    },
    Member: {
        Books: async (args) => await users.getUsersBooks({ memberId: args.id }),
    },
    MemberBookInfo: {
        Book: async (args) =>
            await books.findBooksBy({ id: args.bookId }).first(),
        Library: async (args) =>
            await libraries.findLibrariesBy({ id: args.libraryId }).first(),
    },
};

module.exports = resolvers;
