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

export async function createOffer(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const {
      code,
      title,
      description,
      minRate,
      maxRate,
      area,
      city,
      body,
      requiredExp,
    } = req.body;
    if (!code || !title || !description) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const created = await db.job.create({
      data: {
        code,
        title,
        description,
        body,
        requiredExp,
        minRate,
        maxRate,
        area,
        location: {
          connectOrCreate: {
            where: { city },
            create: { city, country: "Perú" },
          },
        },
        company: { connect: { id } },
      },
    });
    if (!created) {
      return res.status(400).json({ message: "Fail to create offer" });
    }

    const offer = await db.job.findUnique({
      where: { id: created.id },
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
        savedBy: {
          select: {
            id: true,
          },
        },
      },
    });

    return res.json(offer);
  } catch (e) {
    return res.status(500).json({ message: "Fail to create offer", error: e });
  }
}

export async function deleteOffer(req: Request, res: Response) {
  try {
    const { offerId } = req.body;
    const deleted = await db.job.delete({ where: { id: offerId } });

    if (deleted) return res.json({ message: "Ok" });

    return res.status(400).json({ message: "Cannot delete offer" });
  } catch {
    return res.status(500).json({ message: "Fail to delete offer" });
  }
}

export async function getCompanyOffers(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const offers = await db.job.findMany({
      where: {
        companyId: id,
      },
    });

    return res.json(offers);
  } catch {
    return res.status(500).json({ message: "Fail to conned db" });
  }
}
