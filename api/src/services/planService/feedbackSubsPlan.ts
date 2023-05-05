import axios from "axios";
import { header } from "../../utils/headers";
import { baseUrl, prisma } from "./PlanServiceAPI";

// * Feedback Suscriptrion plan

export const feedbackSubsPlan = async (payment_id) => {
  let endpoint = "/preapproval";
  let url = `${baseUrl}${endpoint}/${payment_id}`;
  const { data } = await axios.get(url, header);
  console.log(data);

  let paymentId = await prisma.payment.findMany({
    where: { paymentId: data.id.toString() },
  });

  if (data.status === "authorized" && !paymentId.length) {
    await prisma.payment.create({
      data: { paymentId: data.id.toString() },
    });
    return data;
  }
};
