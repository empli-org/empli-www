import express from "express";
import { getAllMedia, getMediaById } from "../controllers/media";

export function getMediaRoutes() {
  const router = express.Router();

  router.route("/").get(getAllMedia);
  router.route("/:id").get(getMediaById);

  return router;
}
