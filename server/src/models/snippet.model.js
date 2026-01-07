const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
    index: true,
  },
  collectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collection",
  },
});
