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
  res.json(newProducts);
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  // console.log(req.params)
  // console.log(req.url)
  const singleProduct = products.filter((product) => product.id === Number(id));
  console.log(singleProduct);
  if (singleProduct.length < 1) {
    res.status(404).send("Page not found");
  } else {
    res.json(singleProduct);
  }
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
