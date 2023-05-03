import { Request, Response } from "express";
import db from "../../utils/db";


export async function getJobAreas(req: Request, res: Response) {
	try {
		const { key, orderBy } = req.query;
		let areas;
		if (orderBy === "asc") {
			areas = await db.jobArea.findMany({
				...(key && {
					where: {
						name: {
							contains: key as string,
							mode: "insensitive",
						},
					},
				}),
				select: {
					name: true,
				},
				distinct: ["name"],
				take: 6,
				orderBy: { name: "asc" },
			});
		}

		if (orderBy === "desc") {
			areas = await db.jobArea.findMany({
				...(key && {
					where: {
						name: {
							contains: key as string,
							mode: "insensitive",
						},
					},
				}),
				select: {
					name: true,
				},
				distinct: ["name"],
				take: 6,
				orderBy: { name: "desc" },
			});
		}

		if (!orderBy) {
			areas = await db.jobArea.findMany({
				...(key && {
					where: {
						name: {
							contains: key as string,
							mode: "insensitive",
						},
					},
				}),
				select: {
					name: true,
				},
				distinct: ["name"],
				take: 6,
			});
		}

		return res.json(areas);
	} catch {
		return res
			.status(500)
			.json({ status: 500, error: true, message: "Fail to fetch data" });
	}
}
