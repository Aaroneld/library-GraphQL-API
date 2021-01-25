const gql = require("graphql-tag");

const typeDefs = gql`
    """
    Main Types
    """
    type Publisher {
        id: ID!
        name: String!
        books: [Book]!
    }

    type Award {
        id: ID!
        type: String!
    }

    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        penName: String
        dob: String!
        country: String!
        state: String
        Books: [Book]!
        Awards: [Award]!
    }

    type Book {
        id: ID!
        title: String!
        isbn: String!
        yearWritten: String!
        genre: String!
        Author: Author!
        Awards: [Award]!
        Libraries: [BookLibraryInformation]!
        Publisher: Publisher!
    }

    type Library {
        id: ID!
        name: String!
        state: String!
        city: String!
        streetAddress: String!
        allowedLoans: Int!
        Books: [LibraryBookInformation]!
    }

    """
    UserTypes with Interface
    """
    interface User {
        id: ID!
        firstName: String!
        lastName: String!
        dob: String!
        username: String!
        password: String!
    }

    type Member implements User {
        id: ID!
        firstName: String!
        lastName: String!
        dob: String!
        username: String!
        password: String!
        Books: [MemberBookInfo]!
    }

    type Librarian implements User {
        id: ID!
        firstName: String!
        lastName: String!
        dob: String!
        username: String!
        password: String!
        Library: Library!
    }

    type Admin implements User {
        id: ID!
        firstName: String!
        lastName: String!
        dob: String!
        username: String!
        password: String!
    }

    union UserType = Admin | Librarian | Member

    """
    JoinTableTypes
    """
    enum RequestStatus {
        REQUESTED
        LOANED
        RETURNED
    }

    type BookLibraryInformation {
        Library: Library
        quantity: Int
        loaned: Int
    }

    type LibraryBookInformation {
        Book: Book
        quantity: Int
        loaned: Int
    }

    type MemberBookInfo {
        Book: Book!
        Library: Library!
        requestStatus: RequestStatus!
        timeRequested: String!
    }

    """
    Query Input Types
    """
    input BookQueryType {
        id: Int
        title: String
        isbn: String
        yearWritten: String
        genre: String
        author: Int
        libraries: Int
    }

    input AuthorQueryType {
        id: Int
        firstName: String
        lastName: String
        penName: String
        dob: String
        country: String
        state: String
    }

    input LibraryQueryType {
        id: Int
        name: String
        state: String
        city: String
        streetAddress: String
        allowedLoans: Int
    }

    input AwardQueryType {
        id: Int
        name: String
    }

    type Query {
        hello: String!

        Books(queryParams: BookQueryType): [Book]!
        Authors(queryParams: AuthorQueryType): [Author]!
        Libraries(queryParams: LibraryQueryType): [Library]!
        Users: [UserType]!
        Awards(queryParams: AwardQueryType): [Award]!
        Publisher: Publisher!
    }

    type Mutation {
        temp: String!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = typeDefs;
