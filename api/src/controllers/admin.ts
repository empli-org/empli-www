import { Request, Response } from "express";
import db from "../utils/db";

export async function pauseCompany(req: Request, res: Response) {
  const { companyId } = req.params;
  const company = await db.company.findUnique({
    where: { id: companyId },
    select: {
      paused: true,
    },
  });
  if (!company) {
  }
  await db.company.update({
    where: { id: companyId },
    data: {
      paused: !company.paused,
    },
  });
}

export async function pauseTalent(req: Request, res: Response) {
  const { talentId } = req.params;
  const talent = await db.talent.findUnique({
    where: { id: talentId },
    select: {
      paused: true,
    },
  });
  if (!talent) {
  }
  await db.talent.update({
    where: { id: talentId },
    data: {
      paused: !talent.paused,
    },
  });
}

export async function getStats(req: Request, res: Response) {
  try {
    const activeTalents = await db.talent.count({ where: { paused: false } });
    const pausedTalents = await db.talent.count({ where: { paused: true } });
    const activeCompanies = await db.company.count({
      where: { paused: false },
    });
    const pausedCompanies = await db.company.count({ where: { paused: true } });
    const countJobs = await db.job.count();
    const countPostulations = await db.postulation.count();
    const premiumTalents = await db.talent.count({
      where: { plan: { notIn: "FREE" } },
    });
    const premiumCompanies = await db.talent.count({
      where: { plan: { notIn: "FREE" } },
    });

    return res.json({
      activeTalents,
      activeCompanies,
      pausedTalents,
      pausedCompanies,
      countJobs,
      countPostulations,
      premiumTalents,
      premiumCompanies,
    });
  } catch {
    return res.status(500).json({ message: "Fail to retrieve stats" });
  }
}
