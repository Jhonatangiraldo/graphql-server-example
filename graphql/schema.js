const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  buildSchema,
} = require('graphql');

const { getPerson, getPeople } = require('./queries');

const schema = new buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: "Hello"
}

module.exports = { schema, root };
