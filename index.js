const express = require("express");
const app = express();
const PORT = process.env.PORT || 3456;

app.get("/", (req, res) => {
  return res.send({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
