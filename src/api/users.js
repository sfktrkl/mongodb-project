const Router = require("express").Router;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = Router();
const db = require("./db");

const createToken = () => {
  return jwt.sign({}, "secret", { expiresIn: "1h" });
};

router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashed) => {
      db.get()
        .db("shop")
        .collection("users")
        .insertOne({
          username: username,
          password: hashed,
        })
        .then(() => {
          res.status(201).json({ token: createToken() });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
