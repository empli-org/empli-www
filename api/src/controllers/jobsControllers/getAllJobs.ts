import { Request, Response } from "express";
import db from "../../utils/db";
import { Prisma } from "@prisma/client";


export async function getAllJobs(req: Request, res: Response) {
	try {
		const { key, page, location, area } = req.query;
		const currentPage = Math.max(Number(page) || 1, 1);
		const peerPage = 10;
		const countOptions: Prisma.JobCountArgs = {};
		const options: Prisma.JobFindManyArgs = {
			select: {
				code: true,
				title: true,
				area: true,
				type: true,
				minRate: true,
				maxRate: true,
				company: {
					select: {
						name: true,
					},
				},
				location: {
					select: {
						city: true,
						country: true,
					},
				},
			},
			take: peerPage,
			skip: (currentPage - 1) * peerPage,
		};
		options.where = {
			...(key && { title: { contains: key as string, mode: "insensitive" } }),
			...(location && {
				location: {
					OR: [
						{ city: { contains: location as string, mode: "insensitive" } },
						{
							country: { contains: location as string, mode: "insensitive" },
						},
					],
				},
			}),
			...(area && {
				area: { contains: area as string, mode: "insensitive" },
			}),
		};
		countOptions.where = options.where;

		const jobs = await db.job.findMany(options);
		const count = await db.job.count(countOptions);

		return res.json({
			data: jobs,
			count,
		});
	} catch {
		return res
			.status(500)
			.json({ status: 500, error: true, message: "Failt to fetch data" });
	}
}
