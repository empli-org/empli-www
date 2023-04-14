import express from "express";
import { getAllJobs } from "../controllers/jobs";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs);

  return router;
}
