import express from "express";
import { getAllTalents } from "../controllers/talentsControllers/getAllTalents";
import { getTalentById } from "../controllers/talentsControllers/getTalentById";
import { getAllSkills } from "../controllers/talentsControllers/getAllSkills";
import { getCareers } from "../controllers/talentsControllers/getCareers";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents);
  router.route("/careers").get(getCareers);
  router.route("/skills").get(getAllSkills);
  router.route("/:id").get(getTalentById);

  return router;
}
