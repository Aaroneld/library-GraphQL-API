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
    Author: Author!
    Awards: [Award]!
    Libraries: [LibraryBookInformation]!
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
    Library: Library
    quantity: Int
    loaned: Int
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

type Librarian implements User {
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

union UserType = Admin | Librarian | Member

""""""

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
