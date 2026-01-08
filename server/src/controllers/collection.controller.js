const Collection = require("../models/collection.model");
const Snippet = require("../models/snippet.model");

const createCollection = async (req, res) => {
  try {
    const userId = req.auth();
    const { name, description, color } = req.body;

    const collection = await Collection.create({
      clerkUserId: userId,
      name,
      description,
      color,
    });
    res.status(201).json(collection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET ALL COLLECTIONS
 */
const getCollections = async (req, res) => {
  try {
    const { userId } = req.auth();

    const collections = await Collection.find({
      clerkUserId: userId,
    }).sort({ createdAt: -1 });

    res.json(collections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * DELETE COLLECTION
 * IMPORTANT: snippets are NOT deleted
 */
const deleteCollection = async (req, res) => {
  try {
    const { userId } = req.auth();
    const collectionId = req.params.id;

    const collection = await Collection.findOneAndDelete({
      _id: collectionId,
      clerkUserId: userId,
    });

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Remove collection reference from snippets
    await Snippet.updateMany(
      { clerkUserId: userId, collectionId },
      { collectionId: null }
    );

    res.json({ message: "Collection deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createCollection, getCollections, deleteCollection };
