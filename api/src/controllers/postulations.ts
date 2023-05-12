import { Request, Response } from "express";
import db from "../utils/db";

export async function createPostulation(req: Request, res: Response) {
  try {
    const { jobId, talentId } = req.body;
    await db.postulation.create({
      data: {
        talent: { connect: { id: talentId } },
        job: { connect: { id: jobId } },
      },
    });
    return res.json();
  } catch {
    return res.status(500).json({ message: "Fail to create postulation" });
  }
}
