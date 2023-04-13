const express = require("express");

export function getRoutes() {
  const router = express.Router();

  router.use("/api", (req, res) => {
    res.json({ message: "Working" });
  });

  router.use(function (_req, res) {
    res.status(404).json({ error: "Sorry! Could not found page." });
  });

  return router;
}
