import axios from "axios";
import { header } from "../../utils/headers";
import { baseUrl } from "./PlanServiceAPI";

// * Plan Detail.

export const getPlanDetail = async (id) => {
  let endpoint = "/preapproval_plan";
  let url = `${baseUrl}${endpoint}/${id}`;
  const mp = await axios.get(url, header);
  return mp.data;
};
