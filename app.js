const express = require("express");

const { ApolloServer } = require("apollo-server-express");

//Load schema && resolvers

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer();
