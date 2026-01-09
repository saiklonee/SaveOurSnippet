const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const snippetRoutes = require("./routes/snippet.routes");
const collectionRoutes = require("./routes/collection.routes");
const { requireAuth } = require("@clerk/express");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello SaveOurSnippet Backend");
});

app.use("/api/user", requireAuth(), userRoutes);
app.use("/api/snippets", requireAuth(), snippetRoutes);
app.use("/api/collection", requireAuth(), collectionRoutes);

module.exports = app;
