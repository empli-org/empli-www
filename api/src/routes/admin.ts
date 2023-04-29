import express from "express";
import { getStats, pauseCompany, pauseTalent } from "../controllers/admin";
import { getAllTalents } from "../controllers/talents";
import { getAllCompanies } from "../controllers/companies";

export function getAdminRoutes() {
  const router = express.Router();

  router.route("/stats").get(getStats);
  router.route("/talents").get(getAllTalents).put(pauseTalent);
  router.route("/companies").get(getAllCompanies).put(pauseCompany);

  return router;
}
