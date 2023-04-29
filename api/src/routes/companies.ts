import express from "express";
import {
  createCompany,
  favProfile,
  getAllCompanies,
  getFavProfiles,
} from "../controllers/companies";

export function getCompaniesRoutes() {
  const router = express.Router();

  router.route("/").get(getAllCompanies).post(createCompany);
  router.route("/:id/favs").get(getFavProfiles).put(favProfile);

  return router;
}
