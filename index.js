const { graphql } = require('graphql');
const schema = require('./graphql/index');


async function main(param) {
  const result = await graphql(schema, `{ ${param} }`);
  console.log(result.data.getPeople);
  
}

const param = process.argv[2];
main(param);
