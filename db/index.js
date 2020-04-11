const mongoose = require("mongoose");
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const dbPath = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@test-mongo-cd7sh.mongodb.net/test-app?retryWrites=true&w=majority`;

mongoose.connect(dbPath);

mongoose.connection.on("error", (err) => {
  logError(err);
});

mongoose.connection.once("open", () => {
  console.log("> successfully opened the database");
});

module.exports = mongoose;
