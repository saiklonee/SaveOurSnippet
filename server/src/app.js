const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const snippetRoutes = require("./routes/snippet.routes");
const { requireAuth } = require("@clerk/express");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello SaveOurSnippet Backend");
});

app.use("/api/user", requireAuth(), userRoutes);
app.use("/api/snippets", requireAuth(), snippetRoutes);

module.exports = app;
x``;
