const Snippet = require("../models/snippet.model");

// CREATE SNIPPET

const createSnippet = async (req, res) => {
  try {
    const userId = req.auth();
    const { title, description, code, language, tags, collectionId } = req.body;

    const snippet = await Snippet.create({
      clerkUserId: userId,
      title,
      description,
      code,
      language,
      tags,
      collectionId: collectionId || null,
    });

    res.status(201).json(snippet);
  } catch (err) {
    console.log(err);
  }
};

// UPDATE Snippet

const updateSnippet = async (req, res) => {
  try {
    const userId = req.auth();

    const snippet = await Snippet.findOneAndUpdate(
      { _id: req.params.id, clerkUserId: userId },
      req.body,
      { new: true }
    );

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE Snippet

const deleteSnippet = async (req, res) => {
  try {
    const userId = req.auth();

    const snippet = await Snippet.findOneAndDelete({
      _id: req.params.id,
      clerkUserId: userId,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json({ message: "Snippet deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL Snippets for a USER

const getSnippets = async (req, res) => {
  try {
    const userId = req.auth();
    const { q } = req.query;

    const filter = { clerkUserId: userId };

    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { tags: { $in: [q.toLowerCase()] } },
      ];
    }

    const snippets = await Snippet.find(filter).sort({
      isPinned: -1,
      updatedAt: -1,
    });

    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET Single Snippet

const getSnippetById = async (req, res) => {
  try {
    const { userId } = req.auth();

    const snippet = await Snippet.findOne({
      _id: req.params.id,
      clerkUserId: userId,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PIN / UNPIN snippet

const togglePin = async (req, res) => {
  try {
    const { userId } = req.auth();

    const snippet = await Snippet.findOne({
      _id: req.params.id,
      clerkUserId: userId,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    snippet.isPinned = !snippet.isPinned;

    await snippet.save();

    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all PINNED Snippets

const getPinnedSnippets = async (req, res) => {
  try {
    const { userId } = req.auth();

    const snippets = await Snippet.find({
      clerkUserId: userId,
      isPinned: true,
    }).sort({ updatedAt: -1 });

    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET snippets by COLLECTION

const getSnippetsByCollection = async (req, res) => {
  try {
    const { userId } = req.auth();

    const snippets = await Snippet.find({
      clerkUserId: userId,
      collectionId: req.params.collectionId,
    }).sort({ isPinned: -1, updatedAt: -1 });

    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ----------------- // export functions // ----------------- //

module.exports = {
  createSnippet,
  updateSnippet,
  deleteSnippet,
  getSnippets,
  getSnippetById,
  togglePin,
  getPinnedSnippets,
  getSnippetsByCollection,
};
