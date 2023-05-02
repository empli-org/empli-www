import { Request, Response } from "express";
import db from "../utils/db";

export async function getAllCompanies(req: Request, res: Response) {
	const { orderBy } = req.query;
	let companies;
	try {
		if (orderBy === "asc") {
			companies = await db.company.findMany({
				include: {
					category: true,
				},
				orderBy: { name: "asc" },
			});
		}
		if (orderBy === "desc") {
			companies = await db.company.findMany({
				include: {
					category: true,
				},
				orderBy: { name: "desc" },
			});
		}
		if (!orderBy) {
			companies = await db.company.findMany({
				include: {
					category: true,
				},
			});
		}

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
