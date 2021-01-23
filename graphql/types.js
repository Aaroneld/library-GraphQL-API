const typeDefs = `

type Query {
    hello: String!
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
