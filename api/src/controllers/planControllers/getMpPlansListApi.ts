import { Request, Response } from "express";
import { getListPlan } from "../../services/planService/getListPlan";




export const getMpPlansListApi = async (req: Request, res: Response) => {
	// * Funcion para listar los planes creados
	try {
		const getList = await getListPlan();
		if (getList) {
			res.status(200).json({
				msg: "Lista de planes obtenidos correctamente",
				list: getList,
			});
		} else {
			res.status(404).json({
				error: true,
				msg: "No hay lista de planes",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al obtener la lista de planes",
		});
	}
};
