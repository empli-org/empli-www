import express from "express";
import {
  createAdmin,
  getStats,
  pauseCompany,
  pauseTalent,
} from "../controllers/admin";
import { getAllTalents } from "../controllers/talentsControllers/talents";
import { getAllCompanies } from "../controllers/companiesControllers/companies";

export function getAdminRoutes() {
  const router = express.Router();

  router.route("/create").post(createAdmin);
  router.route("/stats").get(getStats);
  router.route("/talents").get(getAllTalents).put(pauseTalent);
  router.route("/companies").get(getAllCompanies).put(pauseCompany);

  return router;
}
