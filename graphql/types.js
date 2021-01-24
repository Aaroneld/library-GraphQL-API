const typeDefs = `

""""""

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
    books: [Book]!
    awards: [Award]!
}


type Book {
    id: ID!
    title: String!
    isbn: String!
    yearWritten: String!
    genre: String!
    author: Author!
    awards: [Award]!
    libraries: [LibraryBookInformation]!
}

""""""

type Library {
    id: ID!
    name: String!
    state: String!
    city: String!
    streetAddress: String!
    allowedLoans: Int!
    books: [Book]!
}

type LibraryBookInformation {
    library: Library
    quantity: Int!
    loaned: Int!
}


""""""
interface User {
    id: ID!
    firstName: String!
    lastName: String!
    dob: String!
    username: String!
    password: String!        
}

enum RequestStatus {
    REQUESTED
    LOANED
    RETURNED
}

type MemberBookInfo {
    book: Book!
    requestStatus: RequestStatus!
    timeRequested: String!
}

type Member implements User {
    id: ID!
    firstName: String!
    lastName: String!
    dob: String!
    username: String!
    password: String!  
    books: [MemberBookInfo]!
}

type Librarian implements User{
    id: ID!
    firstName: String!
    lastName: String!
    dob: String!
    username: String!
    password: String!  
    library: Library!
}

type Admin implements User {
    id: ID!
    firstName: String!
    lastName: String!
    dob: String!
    username: String!
    password: String!  
}

union UserTypes = Admin | Librarian | Member

""""""


type Query {
    hello: String!


    Books: [Book]!
    Authors: [Author]!
    Libraries: [Library]!
    Users: [UserTypes]!
    Awards: [Award]!

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
