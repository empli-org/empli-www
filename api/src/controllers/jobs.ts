import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllJobs(req: Request, res: Response) {
  const jobs = await db.job.findMany();

  return res.json(jobs);
}

export async function getJobByCode(req: Request, res: Response) {
  try {
    const { code } = req.params;
    const job = await db.job.findUnique({ where: { code } });
    if (!job) {
      return res.json({
        status: 404,
        error: true,
        message: `Could not found job with code ${code}`,
      });
    }
    return res.json(job);
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: `Fail to fetch data` });
  }
}
