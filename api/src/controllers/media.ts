import { Request, Response } from "express";
import db from "../utils/db";
import { Prisma } from "@prisma/client";

export async function getAllMedia(req: Request, res: Response) {
  const { key, category, order, page } = req.query;
  const currentPage = Math.max(Number(page) || 1, 1);
  const peerPage = 10;
  const countOptions: Prisma.MediaCountArgs = {};
  const options: Prisma.MediaFindManyArgs = {
    select: {
      title: true,
      image: true,
      description: true,
      category: true,
      createdAt: true,
      premium: true,
    },
    orderBy: {
      createdAt: order === "asc" ? "asc" : "desc",
    },
    take: peerPage,
    skip: (currentPage - 1) * peerPage,
  };
  options.where = {
    published: true,
    ...(key && { title: { contains: key as string, mode: "insensitive" } }),
    ...(category && {
      category: { contains: category as string, mode: "insensitive" },
    }),
  };
  countOptions.where = options.where;

  const media = await db.media.findMany(options);
  const count = await db.media.count(countOptions);
  return res.json({
    data: media,
    count,
  });
}

export async function getMediaById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await db.media.findUnique({ where: { id } });

  if (!result)
    return res
      .status(404)
      .json({ message: `Couldn't found media with id ${id}` });

  return res.json(result);
}
