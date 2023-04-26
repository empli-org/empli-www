import express from "express";
import { getAllNews, getNewsById } from "../controllers/news";

export function getNewsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllNews);
  router.route("/:id").get(getNewsById);

  return router;
}
