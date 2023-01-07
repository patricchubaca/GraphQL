
const { graphql, buildSchema } = require ('graphql')

const schema = buildSchema(`
    type Query {
        olaMundo: String!
    }
`);

const resolver = {
    olaMundo: () => 'Olá Mundo :)'
}

graphql({schema, '{olaMundo}', resolver})
.then (resposta => console.log(resposta));