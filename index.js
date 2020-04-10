const express = require("express");
const app = express();
const PORT = process.env.PORT || 3455;

const IndexController = require("./controllers/IndexController");

app.get("/test", async (req, res) => {
  const response = await IndexController.getTestResponse(req);
  return res.send(response);
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;
