import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllTalents(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const talents = await db.talent.findMany({
      ...(key && {
        where: {
          OR: [
            {
              career: {
                name: { contains: key as string, mode: "insensitive" },
              },
            },
            {
              skills: {
                some: {
                  name: { contains: key as string, mode: "insensitive" },
                },
              },
            },
          ],
        },
      }),
      include: {
        career: true,
        skills: {
          select: {
            name: true,
          },
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
            projects: {
              select: {
                name: true,
                description: true,
                startDate: true,
                endDate: true,
                amount: true,
              },
            },
          },
        },
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
    const talent = await db.talent.findUnique({
      where: { id },
      include: {
        contactInfo: true,
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
