const Router = require("express").Router;

const router = Router();
const db = require("./db");

router.get("/", (req, res) => {
  const products = [];
  db.get()
    .db("shop")
    .collection("products")
    .find()
    .forEach((productDoc) => {
      products.push(productDoc);
    })
    .then(() => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  db.get()
    .db("shop")
    .collection("products")
    .insertOne({ name: req.body.name, price: req.body.price })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
