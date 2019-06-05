let {ApolloServer, gql} = require('apollo-server-lambda')

let typeDefs = gql`
  type Query {
    hello: String
  }
`

let resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

let server = new ApolloServer({typeDefs, resolvers})
let handler = server.createHandler()

exports.handler = function(event, context, callback) {
  let defaults = {
    httpMethod: 'POST',
    body: JSON.stringify(event.body)
  }
  
  let massaged = Object.assign({}, event, defaults)
  handler(massaged, context, callback)
}
