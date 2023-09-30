const express = require("express");
const app = express();

// Middleware function without next()
app.use((req, res, next) => {
  // console.log("Middleware is executed, but next() is missing");
  console.log(`Receive request for ${req.url}`)
  next();
  // Without next(), the request will not proceed further
  // The client will not receive a response
});

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("*", (req, res) => {
  res.send("Hi Hi this another page");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
