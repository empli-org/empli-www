import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllJobs(req: Request, res: Response) {
  const jobs = await db.job.findMany();

  return res.json(jobs);
}
