import { Request, Response } from "express";
import { feedbackSubsPlan } from "../../services/planService/feedbackSubsPlan";

export const getFeedbackSubsPlan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getPaymentId = await feedbackSubsPlan(id);
    if (getPaymentId) {
      res.status(200).json({
        msg: "Informacion del pago obtenida correctamente",
        id: getPaymentId,
      });
    } else {
      res.status(404).json({
        error: true,
        msg: "No se pudo obtener la informacion del pago",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      msg: "Hubo un error al obtener la informacion del pago",
    });
  }
};
