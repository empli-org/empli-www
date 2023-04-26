import express from "express";
import { createCompany, getAllCompanies } from "../controllers/companies";

export function getCompaniesRoutes() {
  const router = express.Router();

  router.route("/").get(getAllCompanies).post(createCompany);

  return router;
}
