const express = require("express");

const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1> <a href='/api/products'>Go to product page</a>`);
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.send(newProducts);
});
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.filter((product) => product.id === 1);
  res.send(singleProduct)
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
