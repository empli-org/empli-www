import express from "express";
import {
  createTalent,
  getAllSkills,
  getAllTalents,
  getSavedOffers,
  getTalentById,
  saveOffer,
} from "../controllers/talents";
import { getCareers } from "../controllers/talents";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents).post(createTalent);
  router.route("/careers").get(getCareers);
  router.route("/skills").get(getAllSkills);
  router.route("/:id").get(getTalentById);
  router.route("/:id/saved").put(saveOffer).get(getSavedOffers);

  return router;
}
