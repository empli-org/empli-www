import express from "express";
import { getAllJobs, getJobByCode } from "../controllers/jobs";

export function getJobsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllJobs);

  router.route("/:code").get(getJobByCode);

  return router;
}
