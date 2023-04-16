import express from "express";
import {
  getAllJobs,
  getJobAreas,
  getJobByCode,
  getJobLocations,
  searchJobsByKey,
} from "../controllers/jobs";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs);
  router.route("/search").get(searchJobsByKey);
  router.route("/locations").get(getJobLocations);
  router.route("/areas").get(getJobAreas);
  router.route("/:code").get(getJobByCode);

  return router;
}
