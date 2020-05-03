const PersonType = `
  type Person {
    id: ID!
    name: String
  }
`;

const QueryType = `
  type Query {
    getPerson(id: Int!): Person
    getPeople: [Person]
  }
`;

module.exports = { PersonType, QueryType };