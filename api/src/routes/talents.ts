import express from "express";
import { getAllTalents, getTalentById } from "../controllers/talents";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents);

  router.route("/:id").get(getTalentById);

  return router;
}
