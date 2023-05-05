import express from "express";
import {
  createTalent,
  getAllSkills,
  getAllTalents,
  getCareers,
  getSavedOffers,
  getTalentById,
  saveOffer,
} from "../controllers/talentsControllers/talents";

export function getTalentRoutes() {
  const router = express.Router();

  router.route("/").get(getAllTalents).post(createTalent);
  router.route("/careers").get(getCareers);
  router.route("/skills").get(getAllSkills);
  router.route("/:id").get(getTalentById);
  router.route("/:id/saved").put(saveOffer).get(getSavedOffers);

  return router;
}
