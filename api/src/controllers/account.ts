import { Request, Response } from "express";
import db from "../utils/db";
import { Company, Talent } from "@prisma/client";

export async function verifyAccount(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "El email es necesario" });

  const adminAccount = await db.admin.findUnique({
    where: {
      userEmail: email,
    },
  });
  if (adminAccount) {
    return res.json({
      success: true,
      type: "admin",
      account: adminAccount,
    });
  }

  const talentAccount = await db.talent.findUnique({
    where: { userEmail: email },
    include: {
      contactInfo: true,
      career: true,
      skills: true,
      experienceInfo: true,
    },
  });

  if (talentAccount)
    return res.json({
      success: true,
      type: "professional",
      account: talentAccount,
    });

  const companyAccount = await db.company.findUnique({
    where: { userEmail: email },
    include: {
      category: true,
      contactInfo: true,
      jobs: true,
    },
  });

  if (companyAccount)
    return res.json({
      success: true,
      type: "company",
      account: companyAccount,
    });

  return res.status(400).json({
    sucess: false,
  });
}

export async function createAccount(req: Request, res: Response) {
  try {
    const { name, plan, email, type } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });
    let created: Talent | Company | null = null;
    if (type === "professional") {
      created = await db.talent.create({
        data: {
          userEmail: email,
          name,
          plan,
        },
      });
    } else {
      created = await db.company.create({
        data: {
          userEmail: email,
          name,
          plan,
        },
      });
    }
    if (!created) {
      return res.status(400).json({ message: "Fail to create account" });
    }
    return res.json(created);
  } catch {
    return res.status(500).json({ message: "Fail to create account" });
  }
}
