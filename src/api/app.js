const express = require("express");
const Router = require("express").Router;

const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const router = Router();
router.get("/", (req, res) => {
  res.status(200).json(false);
});

app.use("/", router);

db.initialize((err) => {
  if (err) console.log(err);
  else app.listen(3100);
});
