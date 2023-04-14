import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCareers(req: Request, res: Response) {
  try {
    const careers = await db.career.findMany();

    return res.json({
      status: 200,
      error: false,
      data: careers,
    });
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: `Fail to fetch data` });
  }
}
