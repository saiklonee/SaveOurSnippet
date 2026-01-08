const express = require("express");
const router = express.Router();
const {
  createSnippet,
  updateSnippet,
  deleteSnippet,
  getSnippets,
  getSnippetById,
  togglePin,
  getPinnedSnippets,
  getSnippetsByCollection,
} = require("../controllers/snippet.controller");

router.get("/", getSnippets);
router.post("/", createSnippet);
router.get("/pinned", getPinnedSnippets);
router.get("/collection/:collectionId", getSnippetsByCollection);
router.get("/:id", getSnippetById);
router.put("/:id", updateSnippet);
router.delete("/:id", deleteSnippet);
router.patch("/:id/pin", togglePin);

module.exports = router;
