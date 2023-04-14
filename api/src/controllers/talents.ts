import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllTalents(req: Request, res: Response) {
  const talents = await db.talent.findMany({
    include: {
      location: true,
      career: true,
      skills: true,
    },
  });

  return res.json(talents);
}
