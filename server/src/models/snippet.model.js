const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      default: null,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: { type: String, required: true },
    code: { type: String, required: true },
    language: {
      type: String,
      default: "plaintext",
    },
    tags: {
      type: [String],
      default: [],
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const snippetModel = mongoose.model("Snippet", snippetSchema);

module.exports = snippetModel;
