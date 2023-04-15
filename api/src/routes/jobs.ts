import express from "express";
import { getAllJobs, getJobByCode, searchJobsByKey } from "../controllers/jobs";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs);

  router.route("/search").get(searchJobsByKey);

  router.route("/:code").get(getJobByCode);

  return router;
}
