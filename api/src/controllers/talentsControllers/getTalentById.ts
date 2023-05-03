import { Request, Response } from "express";
import db from "../../utils/db";


export async function getTalentById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const talent = await db.talent.findUnique({
      where: { id },
      include: {
        skills: {
          select: {
            name: true,
          },
        },
        career: {
          select: { name: true },
        },
        contactInfo: {
          select: {
            location: {
              select: {
                city: true,
                country: true,
              },
            },
          },
        },
        experienceInfo: {
          select: {
            projects: true,
            references: true,
          },
        },
      },
    });
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
