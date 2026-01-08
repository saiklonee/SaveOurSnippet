const Collection = require("");

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

const deleteCollection = async (req, res) => {};

module.exports = { createCollection, deleteCollection };
