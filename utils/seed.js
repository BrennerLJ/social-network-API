const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const thoughts = await Thought.insertMany([
    {
      thoughtText: "I like coding!",
      userName: "Brenner",
      reactions: [
        {
          reactionBody: "I love it too!",
          userName: "Patrick",
        },
      ],
    },
    {
      thoughtText: "It is a lot of fun.",
      userName: "Lorenzo",
      reactions: [
        {
          reactionBody: "Hiiii",
          userName: "Rylee",
        },
      ],
    },
  ]);

  const user = await User.insertMany([
    {
      username: "Brenner",
      email: "test@test.com",
      thoughts: [thoughts[0]._id, thoughts[1]._id],
      friends: [],
    },
    {
      username: "Lorenzo",
      email: "test2@test.com",
      thoughts: [thoughts[2]._id],
      friends: [],
    },
    {
      username: "Patrick",
      email: "test3@test.com",
      thoughts: [],
      friends: [],
    },
  ]);
});