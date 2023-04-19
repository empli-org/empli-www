import express from "express";
import {
  getAllSkills,
  getAllTalents,
  getTalentById,
} from "../controllers/talents";
import { getAllCareers } from "../controllers/careers";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents);
  router.route("/careers").get(getAllCareers);
  router.route("/skills").get(getAllSkills);
  router.route("/:id").get(getTalentById);

  return router;
}
