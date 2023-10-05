const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
