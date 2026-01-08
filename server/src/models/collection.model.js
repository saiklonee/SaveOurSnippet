const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, required: true, index: true },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#6366f1",
    },
  },
  { timestamps: true }
);

const collectionModel = mongoose.model("Collection", collectionSchema);

module.exports = collectionModel;
