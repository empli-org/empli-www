import express,{Request,Response} from "express";
import {
	getMpPlanLinkApi,
	getMpPlansListApi,
	getMpSubscriptionPlanIdApi,
	putMpPlanApi,
} from "../controllers/plans/PlanControllerAPI";
import { getMoneyData } from "../controllers/ExchangeController";
import { getMpSubscriptionLinkApi } from "../controllers/subscriptions/SubscriptionControllerAPI";

export function paymentRoutes() {
	const router = express.Router();
	router.route("/").get((_req:Request, res:Response) => {
		res.json({
			"/subscription": "generar link de suscripcion",
			"/plans": "generar link de planes",
		});
	});
	/* * * * * * * * * * * *  *
	 * RUTAS DE SUSCRIPCIONES *
	 * * * * * * * * * * * *  */

	// * Por API
	router.route("/subscription").post(getMpSubscriptionLinkApi);

	/* * * * * * * * * *
	 * RUTAS DE PLANES *
	 * * * * * * * * * */

	// * Por API
	router.route("/plans").get(getMpPlansListApi);
	router.route("/plan/link").post(getMpPlanLinkApi);
	router.route("/plan/:id").get(getMpSubscriptionPlanIdApi);
	router.route("/plan/:id").put(putMpPlanApi);

	// * Track dolar en tiempo real
	router.route("/convert").get(getMoneyData);
	
	return router;
}

