const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getPeople: {
        type: GraphQLString,
        resolve() {
          return 'hey!';
        },
      },
    },
  }),
});

module.exports = schema;