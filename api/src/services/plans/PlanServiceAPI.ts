import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import axios from "axios";
import { header } from "../../utils/headers";
dotenv.config();

const prisma = new PrismaClient();
const baseUrl = process.env.API_MP_URL;
let endpoint;

export const getPlanLinkApi = async (pref) => {
	// * Funcion que genera el link de creacion de plan
	// * talents: Discovery, Boost, Elite,
	// * empresas: Starter ,Engine ,Ascend

	endpoint = "/preapproval_plan";
	let url = `${baseUrl}${endpoint}`;
	console.log(url);
	try {
		const body = {
			binari_mode: true,
			collector_email: "test_user_620028202@testuser.com",
			reason: `Plan ${pref.reason}`,
			auto_recurring: {
				frequency: 1,
				frequency_type: pref.frequency_type,
				repetitions: pref.repetitions,
				transaction_amount: pref.amount,
				currency_id: pref.currency,
				free_trial: {
					frequency: pref.free_frequency,
					frequency_type: pref.free_frequency_type,
				},
			},
			back_url: pref.back_url,
		};
		const mp = await axios.post(url, body, header);
		const linkCheckout = mp && mp.data && mp.data.init_point;
		// * Guarda el response  en la base de datos
		mp &&
			mp.data &&
			(await prisma.plans.create({
				data: {
					plan: mp.data,
				},
			}));
		console.log(mp.data);
		return linkCheckout;
	} catch (e) {
		console.log(e);
		return e;
	}
};

// * Editar Plan

export const putPlanApi = async (id, pref) => {
	// * Funcion que edita los planes y actualiza la base de datos

	endpoint = `/preapproval_plan/${id}`;
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

// * Plan Detail.

export const getSubscriptionPlan = async (id) => {
	endpoint = "/preapproval_plan";
	let url = `${baseUrl}${endpoint}/${id}`;
	const mp = await axios.get(url, header);
	return mp.data;
};

// * Listar Planes

export const getListPlan = async () => {
	try {
		const endpoint = "/preapproval_plan/search?limit=100";
		const url = `${baseUrl}${endpoint}`;
		const response = await axios.get(url, header);
		const filterPlan = response.data.results.filter(
			(p) => p.status === "active"
		);
		if (filterPlan.length > 0) {
			return filterPlan;
		} else {
			throw new Error("No se encontraron planes activos");
		}
	} catch (e) {
		console.error(e);
		throw e;
	}
};

// * Feedback Suscriptrion plan

export const feedbackSubsPlan = async (payment_id) => {
	endpoint = "/preapproval";
	let url = `${baseUrl}${endpoint}/${payment_id}`;
	const { data } = await axios.get(url, header);

	let paymentId = await prisma.payment.findMany({
		where: { paymentId: data.id.toString() },
	});

	if (data.status === "authorized" && !paymentId.length) {
		await prisma.payment.create({
			data: { paymentId: data.id.toString() },
		});
	}
};
