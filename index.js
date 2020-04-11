const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3455;

const IndexController = require("./controllers/IndexController");
const PeopleController = require("./controllers/PeopleController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./db");
const status = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

app.get("/db-health-check", async (req, res) => {
  return res.send(status[db.connection.readyState]);
});

app.get("/test", async (req, res) => {
  const response = await IndexController.getTestResponse(req);
  return res.send(response);
});

app.get("/people", async (req, res) => {
  let response;
  try {
    response = await PeopleController.getPeople();
  } catch (error) {
    response = {
      error: error.message,
    };
  }

  return res.send(response);
});

app.post("/people", async ({ body: person }, res) => {
  let response;
  try {
    response = await PeopleController.createPerson(person);
  } catch (error) {
    response = {
      error: error.message,
    };
  }

  return res.send(response);
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;
