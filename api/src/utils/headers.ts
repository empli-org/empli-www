import dotenv from "dotenv";
dotenv.config();

export const header = {
	headers: {
		"Conten-Type": "application/json",
		Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
	},
};
