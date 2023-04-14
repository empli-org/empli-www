import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCareers(req: Request, res: Response) {
  const careers = await db.career.findMany();

  return res.json(careers);
}
