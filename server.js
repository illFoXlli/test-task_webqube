const express = require("express");
const path = require("path");

const app = express();
const staticPath = __dirname;

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(4322, () => {
  console.log("Server is running on http://localhost:4322");
});
