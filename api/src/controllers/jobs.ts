import { Request, Response } from "express";

export async function getAllJobs(req: Request, res: Response) {
  return res.json([]);
}
