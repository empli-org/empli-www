import axios from "axios";
import { header } from "../../utils/headers";
import { baseUrl, prisma } from "./PlanServiceAPI";

export const getPlanLinkApi = async (pref) => {
  // * Funcion que genera el link de creacion de plan
  // * talents: Discovery, Boost, Elite,
  // * empresas: Starter ,Engine ,Ascend
  let endpoint = "/preapproval_plan";
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
