const schema = require('./graphql/index');

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { helper: () => console.log('this is a helper')}
  })
);

app.listen(4000);
