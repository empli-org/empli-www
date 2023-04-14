import { Request, Response } from "express";
import { getJobsRoutes } from "./jobs";
import express from "express";

export function getRoutes() {
  const router = express.Router();

  router.use("/jobs", getJobsRoutes());

  router.use(function (_req: Request, res: Response) {
    res.status(404).json({ error: "Sorry! Could not found page." });
  });

  return router;
}
