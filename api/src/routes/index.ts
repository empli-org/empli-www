import { Request, Response } from "express";
import { getJobsRoutes } from "./jobs";
import express from "express";
import { getTalentRoutes } from "./talents";
import { getCompaniesRoutes } from "./companies";
import { paymentRoutes } from "./payment";

export function getRoutes() {
  const router = express.Router();

  router.use("/jobs", getJobsRoutes());
  router.use("/talents", getTalentRoutes());
  router.use("/companies", getCompaniesRoutes());
  router.use("/payments",paymentRoutes())

  router.use(function (_req: Request, res: Response) {
    res.status(404).json({ error: "Sorry! Could not found page." });
  });

  return router;
}
