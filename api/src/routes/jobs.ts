import express from "express";
import { getJobAreas } from "../controllers/jobsControllers/getJobAreas";
import { getJobLocations } from "../controllers/jobsControllers/getJobLocations";
import { getAllJobs } from "../controllers/jobsControllers/getAllJobs";
import { getJobByCode } from "../controllers/jobsControllers/getJobByCode";
import { searchJobsByKey } from "../controllers/jobsControllers/searchJobsByKey";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs);
  router.route("/search").get(searchJobsByKey);
  router.route("/locations").get(getJobLocations);
  router.route("/areas").get(getJobAreas);
  router.route("/:code").get(getJobByCode);

  return router;
}
