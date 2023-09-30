const express = require("express");
const app = express();
// const path = require('path');


// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   console.log(path.resolve(__dirname, './navbar-app/index.html'))
// });
// without doing above code do this below code 
app.use(express.static('./public'))

app.get("/about", (req, res) => {
  res.send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3001, () => console.log("Server is listening on 3000 port"));