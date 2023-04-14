import express from "express";
import { getAllTalents } from "../controllers/talents";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents);

  return router;
}
