import express,{Request,Response} from "express";
import { getFeedbackSubsPlan, getMpPlansListApi,getMpSubscriptionPlanIdApi,putMpPlanApi,getMpPlanLinkApi,getMoneyData } from "../controllers/planControllers/index";


export function paymentRoutes() {
	const router = express.Router();
	router.route("/").get((_req:Request, res:Response) => {
		res.json({
			"/plan": "Listar Planes",
			"/plan/link": "genera link de creacion Planes",
			"/plan/:id": "Info/Edit plan especifico",
			"/convert": "Traquea la moneda local",
		});
	});
	/* * * * * * * * * * * *  *
	 * RUTAS DE SUSCRIPCIONES *
	 * * * * * * * * * * * *  */

	// * Por API

	/* * * * * * * * * *
	 * RUTAS DE PLANES *
	 * * * * * * * * * */

	// * Por API
	router.route("/plans").get(getMpPlansListApi);
	router.route("/plan/link").post(getMpPlanLinkApi);
	router.route("/plan/:id").get(getMpSubscriptionPlanIdApi);
	router.route("/plan/subs/:id").get(getFeedbackSubsPlan);
	router.route("/plan/:id").put(putMpPlanApi);

	// * Track dolar en tiempo real
	router.route("/convert").get(getMoneyData);
	
	return router;
}

