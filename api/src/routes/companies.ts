import express from "express";
import { getAllCompanies } from "../controllers/companiesControllers/companies";

export function getCompaniesRoutes() {
  const router = express.Router();

  router.route("/").get(getAllCompanies);

  return router;
}
