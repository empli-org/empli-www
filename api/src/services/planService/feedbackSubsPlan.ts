import axios from "axios";
import { header } from "../../utils/headers";
import { baseUrl } from "./PlanServiceAPI";
import db from "../../utils/db";

// * Feedback Suscriptrion plan

export const feedbackSubsPlan = async (payment_id) => {
  let endpoint = "/preapproval";
  let url = `${baseUrl}${endpoint}/${payment_id}`;
  const { data } = await axios.get(url, header);

  let paymentId = await db.payment.findMany({
    where: { paymentId: data.id.toString() },
  });

  if (data.status === "authorized" && !paymentId.length) {
    await db.payment.create({
      data: { paymentId: data.id.toString() },
    });
    return data;
  }
};
