import express from "express";
import { createMedia, getAllMedia, getMediaById } from "../controllers/media";

export function getMediaRoutes() {
  const router = express.Router();

  router.route("/").get(getAllMedia).post(createMedia);
  router.route("/:id").get(getMediaById);

  return router;
}
