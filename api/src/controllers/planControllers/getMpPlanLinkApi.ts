import { Request, Response } from "express";
import { getPlanLinkApi } from "../../services/planService/getPlanLinkApi";




export const getMpPlanLinkApi = async (_req: Request, res: Response) => {
	// * Funcion para obtener el link de pago/creacion de plan
	const pref = _req.body;

	try {
		const getLink = await getPlanLinkApi(pref);
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
