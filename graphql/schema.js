const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  buildSchema,
} = require('graphql');

const { getPerson, getPeople } = require('./queries');
const api = require('../db/api');

const schema = new buildSchema(`
  type Person {
    id: ID!
    name: String
  }

  type Query {
    getPerson(id: Int!): Person
    getPeople: [Person]
  }
`);

const root = {
  getPerson: ({ id }) => api.getPerson(id),
  getPeople: () => api.getPeople(),
}

module.exports = { schema, root };
