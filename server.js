const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("database connected"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen()
  .then(({ port }) => console.log(`server listening on PORT ${port}`));
