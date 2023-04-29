import { Request, Response } from "express";
import { getJobsRoutes } from "./jobs";
import express from "express";
import { getTalentRoutes } from "./talents";
import { getCompaniesRoutes } from "./companies";
import { getAccountRoutes } from "./account";
import { getNewsRoutes } from "./news";
import { getMediaRoutes } from "./media";
import { getPostulationRoutes } from "./postulations";
import { getAdminRoutes } from "./admin";

export function getRoutes() {
  const router = express.Router();

  router.use("/jobs", getJobsRoutes());
  router.use("/talents", getTalentRoutes());
  router.use("/companies", getCompaniesRoutes());
  router.use("/account", getAccountRoutes());
  router.use("/news", getNewsRoutes());
  router.use("/media", getMediaRoutes());
  router.use("/postulations", getPostulationRoutes());
  router.use("/admin", getAdminRoutes());

  router.use(function (_req: Request, res: Response) {
    res.status(404).json({ error: "Sorry! Could not found page." });
  });

  return router;
}
