import { Request, Response, query } from "express";
import db from "../utils/db";
import { Prisma } from "@prisma/client";

export async function getJobAreas(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const areas = await db.job.findMany({
      ...(key && {
        where: {
          area: {
            contains: key as string,
            mode: "insensitive",
          },
        },
      }),
      select: {
        area: true,
      },
      take: 6,
    });

    return res.json(areas);
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: "Fail to fetch data" });
  }
}

export async function getJobLocations(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const locations = await db.job.findMany({
      ...(key && {
        where: {
          location: {
            OR: [
              { city: { contains: key as string, mode: "insensitive" } },
              { country: { contains: key as string, mode: "insensitive" } },
            ],
          },
        },
      }),
      select: {
        location: {
          select: {
            country: true,
            city: true,
          },
        },
      },
      take: 6,
    });

    return res.json(
      locations.map((l) => ({
        city: l.location.city,
        country: l.location.country,
      }))
    );
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: "Fail to fetch data" });
  }
}

export async function getAllJobs(req: Request, res: Response) {
  try {
    const { key, page, location, area } = req.query;
    const currentPage = Math.max(Number(page) || 1, 1);
    const peerPage = 10;
    const countOptions: Prisma.JobCountArgs = {};
    const options: Prisma.JobFindManyArgs = {
      select: {
        code: true,
        title: true,
        area: true,
        type: true,
        minRate: true,
        maxRate: true,
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
      },
      take: peerPage,
      skip: (currentPage - 1) * peerPage,
    };
    options.where = {
      ...(key && { title: { contains: key as string, mode: "insensitive" } }),
      ...(location && {
        location: {
          OR: [
            { city: { contains: location as string, mode: "insensitive" } },
            {
              country: { contains: location as string, mode: "insensitive" },
            },
          ],
        },
      }),
      ...(area && {
        area: { contains: area as string, mode: "insensitive" },
      }),
    };
    countOptions.where = options.where;

    const jobs = await db.job.findMany(options);
    const count = await db.job.count(countOptions);

    return res.json({
      data: jobs,
      count,
    });
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: "Failt to fetch data" });
  }
}

export async function getJobByCode(req: Request, res: Response) {
  try {
    const { code } = req.params;
    const job = await db.job.findUnique({
      where: { code },
      include: {
        company: { select: { name: true } },
        location: { select: { city: true, country: true, zip: true } },
      },
    });
    if (!job) {
      return res.json({
        status: 404,
        error: true,
        message: `Could not found job with code ${code}`,
      });
    }
    return res.json(job);
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: `Fail to fetch data` });
  }
}

export async function searchJobsByKey(req: Request, res: Response) {
  try {
    const { key } = req.query;
    const jobs = await db.job.findMany({
      where: {
        title: { contains: key as string, mode: "insensitive" },
      },
      select: {
        code: true,
        title: true,
        area: true,
        company: {
          select: {
            name: true,
          },
        },
      },
      take: 6,
    });

    return res.json(
      jobs.map((job) => ({
        code: job.code,
        title: job.title,
        area: job.area,
        company: job.company.name,
      }))
    );
  } catch {
    return res
      .status(500)
      .json({ status: 500, error: true, message: "Failt to fetch data" });
  }
}
