import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCompanies(req: Request, res: Response) {
  try {
    const { paused } = req.params;
    const companies = await db.company.findMany({
      where: {
        paused: paused === "true" ? true : false,
      },
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

export async function createCompany(req: Request, res: Response) {
  try {
    const { name, description, plan, userEmail } = req.body;
    if (!name || !userEmail)
      return res
        .status(400)
        .json({ message: "Company name and userEmail are required" });
    const created = await db.company.create({
      data: {
        name,
        description,
        plan,
        userEmail,
      },
    });
    if (!created)
      return res.status(400).json({ message: "Fail to create company" });
    return res.json(created);
  } catch {
    return res.status(500).json({ message: "Fail to create company" });
  }
}

export async function favProfile(req: Request, res: Response) {
  const { id } = req.params;
  const { talentId } = req.body;
  const company = await db.company.findUnique({
    where: { id },
    include: {
      favorites: {
        select: {
          id: true,
        },
      },
    },
  });
  if (company) {
    const isFaved = company.favorites.map((o) => o.id).includes(talentId);
    await db.talent.update({
      where: {
        id: talentId,
      },
      data: {
        favedBy: {
          ...(isFaved
            ? { disconnect: { id: company.id } }
            : { connect: { id: company.id } }),
        },
      },
    });
    return res.json({ message: `${isFaved ? "Remove from favs" : "Faved"}` });
  }
  return res.json({ message: "Fav is failed" });
}

export async function getFavProfiles(req: Request, res: Response) {
  const { id } = req.params;
  const profiles = await db.company.findUnique({
    where: { id },
    select: {
      favorites: true,
    },
  });
  return res.json(profiles);
}
