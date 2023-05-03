import { getMoneyConvert } from "../services/exchange";

export const getMoneyData = async (req, res) => {
	try {
		const getMoney = await getMoneyConvert();
		if (getMoney) {
			res.status(200).json({
				msg: "Data extraida correctamente",
				data: getMoney,
			});
		} else {
			res.status(500).json({
				error: true,
				msg: "Hubo un error al convertir la data",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			error: true,
			msg: "Hubo un error al convertir la data",
		});
	}
};
