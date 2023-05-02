import { Request, Response } from "express";
import db from "../utils/db";
import { Prisma } from "@prisma/client";

export async function getAllNews(req: Request, res: Response) {
  const { key, category, order, page } = req.query;
  const currentPage = Math.max(Number(page) || 1, 1);
  const peerPage = 10;
  const countOptions: Prisma.PostCountArgs = {};
  const options: Prisma.PostFindManyArgs = {
    select: {
      id: true,
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

  const news = await db.post.findMany(options);
  const count = await db.post.count(countOptions);
  return res.json({
    data: news,
    count,
  });
}

export async function getNewsById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await db.post.findUnique({ where: { id } });

  if (!result)
    return res
      .status(404)
      .json({ message: `Couldn't found new with id ${id}` });

  return res.json(result);
}

export async function createNews(req: Request, res: Response) {
  try {
    const { title, description, image, category, body, premium, published } =
      req.body;
    const created = await db.post.create({
      data: {
        title,
        description,
        image,
        category,
        body,
        premium,
        published,
      },
    });

    return res.json(created);
  } catch {
    return res.status(500).json({ message: "Fail to create news" });
  }
}
