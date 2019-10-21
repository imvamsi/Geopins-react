const user = {
  _id: "1",
  name: "vamsikrishna@gmail.com",
  email: "vamsi@gmail.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
