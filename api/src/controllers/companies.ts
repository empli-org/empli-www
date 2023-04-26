import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCompanies(req: Request, res: Response) {
  try {
    const companies = await db.company.findMany({
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
