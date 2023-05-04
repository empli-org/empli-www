import { Request, Response } from "express";
import db from "../../utils/db";


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
