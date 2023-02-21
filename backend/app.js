const express = require("express");

const app = express();

/////////////////  Middleware

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.all("/", (req, res) => {
  res.status(200).send("hello from server");
});

module.exports = app;
