import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// * API Key de Open Exchange Rates
const apiKey = process.env.EXC_ACCESS_TOKEN;
const excUrl = process.env.API_EXC_URL;

// * URL de la API
const apiUrl = `${excUrl}latest.json?app_id=${apiKey}&symbols=COP`;

// * Obtener la tasa de cambio USD/COP en tiempo real
export const getMoneyConvert = async () => {
	try {
		const { data } = await axios.get(apiUrl);
		const rate = data.rates.COP;
		const priceUSD = 3; // Precio en dólares
		const priceCOP = priceUSD * rate; // Precio en pesos colombianos
		console.log(`La tasa de cambio actual de USD/COP es: ${rate}`);
		console.log(`El precio en pesos colombianos es: ${priceCOP}`);
        return priceCOP
	} catch (e) {
		return e
	}
};
