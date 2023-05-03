import { Request, Response, query } from "express";

import {
	feedbackSubsPlan,
	getListPlan,
	getPlanLinkApi,
	getPlanDetail,
	putPlanApi,
} from "../../services/plans/PlanServiceAPI";



export const getMpPlanLinkApi = async (_req:Request, res:Response) => {
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

export const putMpPlanApi = async (req:Request, res:Response) => {
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

export const getMpSubscriptionPlanIdApi = async (req:Request, res:Response) => {
	// * Funcion para obtener el id del plan

	const { id } = req.params;

	try {
		const getId = await getPlanDetail(id);
		if (getId) {
			res.status(200).json({
				msg: "Id del plan obtenido correctamente",
				id: getId,
			});
		} else {
			res.status(500).json({
				error: true,
				msg: "Hubo un error al obtener el id del plan",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al obtener el id del plan",
		});
	}
};

export const getMpPlansListApi = async (req:Request, res:Response) => {
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

export const getFeedbackSubsPlan = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		const getPaymentId  = await feedbackSubsPlan(id);
		if (getPaymentId) {
			res.status(200).json({
				msg: "Informacion del pago obtenida correctamente",
				id: getPaymentId,
			});
		} else {
			res.status(404).json({
				error: true,
				msg: "No se pudo obtener la informacion del pago",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al obtener la informacion del pago",
		});
	}
}