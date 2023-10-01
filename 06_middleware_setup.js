const express = require("express");
const middlewareFunc = require("./06_middleware_function");
const app = express();
// req => middleware => res

// const middlewareFunc = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   console.log(`Logged In...`);
//   next();
// };

app.get("/", middlewareFunc, (req, res) => {
  res.send(`Home page ${req.url}`);
});
app.get("/about", middlewareFunc, (req, res) => {
  res.send(`About page ${req.url}`);
});

app.listen(3000, () => {
  console.log(
    `Server is listening on 3000 port follow this link http://localhost:3000`
  );
});
