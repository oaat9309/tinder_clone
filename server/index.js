const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json("Hello to my App");
});

app.listen(PORT, () => console.log("Server on " + PORT));
