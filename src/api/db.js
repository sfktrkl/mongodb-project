const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";

let db;
const initialize = (callback) => {
  if (db) {
    console.log("Already initialized.");
    return callback(null);
  }
  MongoClient.connect(url)
    .then((client) => {
      db = client;
      callback(null);
    })
    .catch((err) => {
      callback(err);
    });
};

const get = () => {
  if (db) return db;
  throw Error("Not initialized.");
};

module.exports = {
  initialize,
  get,
};
