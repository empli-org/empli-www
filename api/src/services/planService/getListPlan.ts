import axios from "axios";
import { header } from "../../utils/headers";
import { baseUrl } from "./PlanServiceAPI";

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
