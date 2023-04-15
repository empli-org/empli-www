import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllJobs(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const jobs = await db.job.findMany({
      ...(key && {
        where: {
          title: { contains: key as string, mode: "insensitive" },
        },
      }),
    });

    return res.json(jobs);
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: "Failt to fetch data" });
  }
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
