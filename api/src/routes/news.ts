import express from "express";
import { createNews, getAllNews, getNewsById } from "../controllers/news";

export function getNewsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllNews).post(createNews);
  router.route("/:id").get(getNewsById);

  return router;
}
