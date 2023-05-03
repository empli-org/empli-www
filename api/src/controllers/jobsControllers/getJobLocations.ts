import { Request, Response } from "express";
import db from "../../utils/db";


export async function getJobLocations(req: Request, res: Response) {
	try {
		const { key, orderBy } = req.query;
		let locations;
		if (orderBy === "asc") {
			locations = await db.job.findMany({
				...(key && {
					where: {
						location: {
							OR: [
								{ city: { contains: key as string, mode: "insensitive" } },
								{ country: { contains: key as string, mode: "insensitive" } },
							],
						},
					},
				}),
				select: {
					location: {
						select: {
							country: true,
							city: true,
						},
					},
				},
				distinct: ["locationId"],
				take: 6,
			});

		}


		return res.json(
			locations.map((l) => ({
				city: l.location.city,
				country: l.location.country,
			}))
		);
	} catch {
		return res
			.status(500)
			.json({ status: 500, error: true, message: "Fail to fetch data" });
	}
}
