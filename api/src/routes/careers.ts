import express from "express";
import { getAllCareers } from "../controllers/careers";

export function getCareerRoutes() {
  const router = express.Router();

  router.route("/").get(getAllCareers);

  return router;
}
