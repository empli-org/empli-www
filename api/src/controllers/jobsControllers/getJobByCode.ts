import { Request, Response } from "express";
import db from "../../utils/db";


export async function getJobByCode(req: Request, res: Response) {
	try {
		const { code } = req.params;
		const job = await db.job.findUnique({
			where: { code },
			include: {
				company: { select: { name: true } },
				location: { select: { city: true, country: true, zip: true } },
			},
		});
		if (!job) {
			return res.json({
				status: 404,
				error: true,
				message: `Could not found job with code ${code}`,
			});
		}
		return res.json(job);
	} catch {
		return res
			.status(500)
			.json({ status: 500, error: true, message: `Fail to fetch data` });
	}
}
