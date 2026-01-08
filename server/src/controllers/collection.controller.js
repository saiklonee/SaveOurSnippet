const Collection = require("");

const createCollection = async (req, res) => {
  try {
    const userId = req.auth();
  } catch (err) {
    console.log(err);
  }
};

const deleteCollection = async (req, res) => {};

module.exports = { createCollection, deleteCollection };
