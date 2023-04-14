import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCompanies(req: Request, res: Response) {
  try {
    const companies = await db.company.findMany({
      include: {
        category: true,
      },
    });

    return res.json({
      status: 200,
      error: false,
      data: companies,
    });
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: `Fail to fetch data` });
  }
}
