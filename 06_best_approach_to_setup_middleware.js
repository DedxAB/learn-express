const express = require("express");
const middlewareFunc = require("./06_middleware_function");
const app = express();
// req => middleware => res
// middleware is a piece of code which executes without the responce-request cycle
// we use this in authentication, logging etc

// app.use("/api", middlewareFunc); // middleware will call /api/items and also /api/products routes as wel
// if we provide nothing then every routes have the middlewareFunc
app.use(middlewareFunc);

app.get("/", (req, res) => {
  res.send(`Home page ${req.url}`);
});
app.get("/about", (req, res) => {
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
