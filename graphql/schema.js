const { buildSchema } = require('graphql');

const { PersonType, QueryType } = require('./types');

const { getPerson, getPeople } = require('../resolvers/index');

const schema = new buildSchema(`
  ${PersonType}
  ${QueryType}
`);

const root = {
  getPerson,
  getPeople,
};

module.exports = { schema, root };
