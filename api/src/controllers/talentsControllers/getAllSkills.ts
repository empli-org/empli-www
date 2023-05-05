import { Request, Response } from "express";
import db from "../../utils/db";


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
