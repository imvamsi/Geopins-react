const { AuthenticationError } = require("apollo-server");

const user = {
  _id: "1",
  name: "vamsikrishna@gmail.com",
  email: "vamsi@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

//check to see if authenticated else return failed

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("you must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
