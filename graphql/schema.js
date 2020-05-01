const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const api = require('../db/api');

const PersonType = new GraphQLObjectType({
  name: 'PersonType',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getPerson: {
        type: PersonType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(source, args, ctx) {
          ctx.helper();
          return api.getPerson(args.id);
        },
      },
    },
  }),
});

module.exports = schema;
