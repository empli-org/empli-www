import { Request, Response } from "express";

import db from "../utils/db";
import { Prisma } from "@prisma/client";

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
    const { key, page, paused, verified, location, exp } = req.query;
    const currentPage = Math.max(Number(page) || 1, 1);
    const peerPage = 10;

    const options: Prisma.TalentFindManyArgs = {
      select: {
        id: true,
        name: true,
        image: true,
        verified: true,
        userEmail: true,
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
      orderBy: { experienceInfo: { time: exp === "asc" ? "asc" : "desc" } },
    };
    options.where = {
      paused: paused === "true" ? true : false,
      ...(verified === "true" && { plan: { not: "FREE" } }),
      ...(location && {
        contactInfo: {
          location: {
            OR: [
              { city: { contains: location as string, mode: "insensitive" } },
              {
                country: { contains: location as string, mode: "insensitive" },
              },
            ],
          },
        },
      }),
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

export async function createTalent(req: Request, res: Response) {
  try {
    const { name, email, plan } = req.body;
    const created = await db.talent.create({
      data: {
        name,
        userEmail: email,
        plan,
        verified: plan && plan !== "FREE",
      },
    });
    if (!created)
      return res.status(400).json({ message: "Fail to create talent" });
    return res.json(created);
  } catch {
    return res
      .status(400)
      .json({ error: true, status: 400, message: "Fail to create talent" });
  }
}

export async function saveOffer(req: Request, res: Response) {
  const { id } = req.params;
  const { offerId } = req.body;
  const talent = await db.talent.findUnique({
    where: { id },
    include: {
      saved: {
        select: {
          id: true,
        },
      },
    },
  });
  if (talent) {
    const isSaved = talent.saved.map((o) => o.id).includes(offerId);
    await db.job.update({
      where: {
        id: offerId,
      },
      data: {
        savedBy: {
          ...(isSaved
            ? { disconnect: { id: talent.id } }
            : { connect: { id: talent.id } }),
        },
      },
    });
    return res.json({ message: `${isSaved ? "Remove from saved" : "Saved"}` });
  }
  return res.json({ message: "Save is failed" });
}

export async function getSavedOffers(req: Request, res: Response) {
  const { id } = req.params;
  const { sort, location } = req.query;
  const offers = await db.talent.findUnique({
    where: { id },
    select: {
      saved: {
        orderBy: {
          ...(sort && { createdAt: sort === "asc" ? "asc" : "desc" }),
        },
        where: {
          ...(location && {
            location: {
              OR: [
                { city: { contains: location as string, mode: "insensitive" } },
                {
                  country: {
                    contains: location as string,
                    mode: "insensitive",
                  },
                },
              ],
            },
          }),
        },

        select: {
          id: true,
          code: true,
          title: true,
          area: true,
          type: true,
          minRate: true,
          maxRate: true,
          image: true,
          company: {
            select: {
              name: true,
            },
          },
          location: {
            select: {
              city: true,
              country: true,
            },
          },
          createdAt: true,
        },
      },
    },
  });
  return res.json(offers);
}
