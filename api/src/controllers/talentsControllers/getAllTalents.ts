import { Request, Response } from "express";
import db from "../../utils/db";
import { Prisma } from "@prisma/client";


export async function getAllTalents(req: Request, res: Response) {
  try {
    const { key, page } = req.query;
    const currentPage = Math.max(Number(page) || 1, 1);
    const peerPage = 10;

    const options: Prisma.TalentFindManyArgs = {
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
      take: peerPage,
      skip: (currentPage - 1) * peerPage,
    };
    options.where = {
      ...(key && {
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
      }),
    };

    const talents = await db.talent.findMany(options);
    const countOptions: Prisma.TalentCountArgs = {};
    countOptions.where = options.where;
    const count = await db.talent.count(countOptions);

    return res.json({ error: false, status: 200, data: talents, count });
  } catch {
    return res
      .status(500)
      .json({ error: true, status: 500, message: "Fail to fetch data" });
  }
}
