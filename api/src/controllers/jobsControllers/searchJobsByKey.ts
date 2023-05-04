import { Request, Response } from "express";
import db from "../../utils/db";


export async function searchJobsByKey(req: Request, res: Response) {
	try {
		const { key } = req.query;
		const jobs = await db.job.findMany({
			where: {
				title: { contains: key as string, mode: "insensitive" },
			},
			select: {
				code: true,
				title: true,
				area: true,
				company: {
					select: {
						name: true,
					},
				},
			},
			take: 6,
		});

		return res.json(
			jobs.map((job) => ({
				code: job.code,
				title: job.title,
				area: job.area,
				company: job.company.name,
			}))
		);
	} catch {
		return res
			.status(500)
			.json({ status: 500, error: true, message: "Failt to fetch data" });
	}
}
