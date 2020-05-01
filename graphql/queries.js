const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const { PersonType } = require('./types');
const api = require('../db/api');

const getPerson = {
  type: PersonType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve(source, args, ctx) {
    ctx.helper();
    return api.getPerson(args.id);
  },
};

const getPeople = {
  type: new GraphQLObjectType(PersonType),
  resolve(source, args, ctx) {
    return api.getPeople();
  },
};

module.exports = { getPerson, getPeople };
