import { Request, Response } from "express";
import { getPlanDetail } from "../../services/planService/getPlanDetail";

export const getMpSubscriptionPlanIdApi = async (
  req: Request,
  res: Response
) => {
  // * Funcion para obtener el id del plan
  const { id } = req.params;

  try {
    const getId = await getPlanDetail(id);
    if (getId) {
      res.status(200).json({
        msg: "Id del plan obtenido correctamente",
        id: getId,
      });
    } else {
      res.status(500).json({
        error: true,
        msg: "Hubo un error al obtener el id del plan",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: true,
      msg: "Hubo un error al obtener el id del plan",
    });
  }
};
