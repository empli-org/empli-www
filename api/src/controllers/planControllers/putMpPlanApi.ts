import { Request, Response } from "express";
import { putPlanApi } from "../../services/planService/putPlanApi";




export const putMpPlanApi = async (req: Request, res: Response) => {
	// * Funcion para actualizar plan
	const { id, pref } = req.body;

	try {
		const putLink = await putPlanApi(id, pref);
		if (putLink) {
			res.status(200).json({
				msg: "Link actualizado correctamente",
				link: putLink,
			});
		} else {
			res.status(500).json({
				error: true,
				msg: "Hubo un error al actualizar el link",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al actualizar el link",
		});
	}
};
