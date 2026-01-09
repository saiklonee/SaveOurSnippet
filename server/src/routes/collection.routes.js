const express = require("express");
const router = express.Router();
const {
  createCollection,
  getCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
} = require("../controllers/collection.controller");

module.exports = router;
