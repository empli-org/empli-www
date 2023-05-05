import express from "express";
import {
  createJob,
  getAllJobs,
  getJobAreas,
  getJobByCode,
  getJobLocations,
  publishJob,
} from "../controllers/jobsControllers/jobs";
import { searchJobsByKey } from "../controllers/jobsControllers/searchJobsByKey";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs).post(createJob);
  router.route("/search").get(searchJobsByKey);
  router.route("/locations").get(getJobLocations);
  router.route("/areas").get(getJobAreas);
  router.route("/:code").get(getJobByCode).put(publishJob);

  return router;
}
