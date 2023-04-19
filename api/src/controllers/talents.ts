import { Request, Response } from "express";

import db from "../utils/db";

export async function getAllSkills(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const skills = await db.skill.findMany({
      select: {
        name: true,
      },
      ...(key && {
        where: {
          name: { contains: key as string, mode: "insensitive" },
        },
      }),
      take: 6,
      distinct: ["name"],
    });
    return res.json(skills);
  } catch {
    return res
      .status(500)
      .json({ error: true, status: 500, message: "Fail to fetch data" });
  }
}

export async function getCareers(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const careers = await db.career.findMany({
      select: {
        name: true,
      },
      ...(key && {
        where: {
          name: { contains: key as string, mode: "insensitive" },
        },
      }),
      take: 6,
      distinct: ["name"],
    });
    return res.json(careers);
  } catch {
    return res
      .status(500)
      .json({ error: true, status: 500, message: "Fail to fetch data" });
  }
}

export async function getAllTalents(req: Request, res: Response) {
  try {
    const { key, page } = req.query;
    const currentPage = Math.max(Number(page) || 1, 1);
    const peerPage = 10;

    const talents = await db.talent.findMany({
      select: {
        id: true,
        name: true,
        lastname: true,
        image: true,
        verified: true,
        career: {
          select: {
            name: true,
          },
        },
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
      },
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
      take: peerPage,
      skip: (currentPage - 1) * peerPage,
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
