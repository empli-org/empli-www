import express from "express";
import { createPostulation } from "../controllers/postulations";

export function getPostulationRoutes() {
  const router = express.Router();

  router.route("/").post(createPostulation);

  return router;
}
