import axios from "axios";
import { header } from "../../utils/headers";
import {  baseUrl, prisma } from "./PlanServiceAPI";

// * Editar Plan

export const putPlanApi = async (id, pref) => {
	// * Funcion que edita los planes y actualiza la base de datos
	let endpoint = `/preapproval_plan/${id}`;
	let url = `${baseUrl}${endpoint}`;
	console.log(url);
	try {
		const body = {
			binari_mode: true,
			collector_email: "test_user_620028202@testuser.com",
			reason: `${pref.reason}`,
			auto_recurring: {
				frequency: 1,
				frequency_type: pref.frequency_type,
				repetitions: pref.repetitions,
				transaction_amount: pref.amount,
				free_trial: {
					frequency: pref.free_frequency,
					frequency_type: pref.free_frequency_type,
				},
			},
			back_url: pref.back_url,
		};
		const mp = await axios.put(url, body, header);
		const linkCheckout = mp && mp.data && mp.data.init_point;
		mp &&
			mp.data &&
			(await prisma.plans.update({
				where: { id },
				data: {
					plan: mp.data,
				},
			}));
		console.log(mp.data);
		return linkCheckout;
	} catch (err) {
		console.log(err);
		return false;
	}
};
