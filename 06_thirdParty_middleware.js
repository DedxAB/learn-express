const express = require("express");
// const middlewareFunc = require("./06_middleware_function");
// const authorize = require("./06_authorize");
const app = express();
const morgan = require("morgan"); // third party middleware o/p: GET /api/products 304 - - 11.420 ms

// app.use([authorize, middlewareFunc]);
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send(`Home page ${req.url}`);
});
app.get("/about", (req, res) => {
  console.log(req.name);
  res.send(`About page ${req.url}`);
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(3000, () => {
  console.log(
    `Server is listening on 3000 port follow this link http://localhost:3000`
  );
});
