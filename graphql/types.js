const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const PersonType = new GraphQLObjectType({
  name: 'PersonType',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});

module.exports = { PersonType };