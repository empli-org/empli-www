import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllTalents(req: Request, res: Response) {
  try {
    const talents = await db.talent.findMany({
      include: {
        location: true,
        career: true,
        skills: true,
      },
    });

    return res.json({ error: false, status: 200, data: talents });
  } catch {
    return res
      .status(500)
      .json({ error: true, status: 500, message: "Fail to fetch data" });
  }
}

export async function getTalentById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const talent = await db.talent.findUnique({ where: { id } });
    if (!talent) {
      return res.status(404).json({
        error: true,
        status: 404,
        message: `Could not found talent with id ${id}`,
      });
    }
    return res.json(talent);
  } catch {
    return res
      .status(500)
      .json({ error: true, status: 500, message: "Fail to fetch data" });
  }
}
