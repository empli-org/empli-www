import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import axios from "axios";
import { header } from "../../utils/headers";
dotenv.config();

const prisma = new PrismaClient();
const baseUrl = process.env.API_MP_URL;
let endpoint;
const initDate = new Date();

export const getSubscriptionLinkApi = async (pref) => {
  endpoint = "/preapproval";
  let url = `${baseUrl}${endpoint}`;
  console.log(url);
  try {
    const body = {
      binari_mode: true,
      preapproval_plan_id: pref.plan_id,
      payer_email: pref.payer_email,
      back_url: "https://www.google.com/",
      reason: `Plan ${pref.reason}`,
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        start_date: initDate,
        end_date: pref.end_date,
        transaction_amount: pref.amount,
        currency_id: pref.currency,
      },
    };
    const mp = await axios.post(url, body, header);
    console.log(mp.data);
    const linkCheckout = mp && mp.data && mp.data.init_point;
    return linkCheckout;
  } catch (err) {
    console.log(err);
    return err;
  }
};
