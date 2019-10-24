// const { ApolloServer } = require("apollo-server");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const typeDefs = require("./typeDefs");
// const resolvers = require("./resolvers");

// const { findOrCreateUser } = require("./controllers/userController");

// mongoose
//   .connect(process.env.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("database connected"))
//   .catch(err => console.log(err));

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: async ({ req }) => {
//     let authToken = null;
//     let currentUser = null;
//     try {
//       authToken = req.headers.authorization;
//       if (authToken) {
//         //add user
//         currentUser = await findOrCreateUser(authToken);
//       }
//     } catch (error) {
//       console.log(`Unable to verify the token`);
//     }
//     return { authToken, currentUser };
//   }
// });

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { findOrCreateUser } = require("./controllers/userController");

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization;
      if (authToken) {
        currentUser = await findOrCreateUser(authToken);
      }
    } catch (err) {
      console.warn(
        `Unable to authenticate using auth token: ${authToken}`,
        err
      );
    }
    return { authToken, currentUser };
  }
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
