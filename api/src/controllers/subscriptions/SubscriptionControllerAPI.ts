import { Request, Response, query } from "express";
import { getSubscriptionLinkApi } from "../../services/subscriptions/SubscriptionServiceAPI"; 

export const getMpSubscriptionLinkApi = async (_req:Request, res:Response) => {
	const pref = _req.body;

	try {
		const getLink = await getSubscriptionLinkApi(pref);
		if (getLink) {
			res.status(200).json({
				msg: "Link creado correctamente",
				link: getLink,
			});
		} else {
			res.status(500).json({
				error: true,
				msg: "Hubo un error al crear el link",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al crear el link",
		});
	}
};
