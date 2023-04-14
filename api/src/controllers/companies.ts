import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCompanies(req: Request, res: Response) {
  const companies = await db.company.findMany({
    include: {
      category: true,
    },
  });

  return res.json(companies);
}
