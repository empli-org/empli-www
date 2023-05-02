import logger from "loglevel";
import { startServer } from "./start";
import dotenv from "dotenv";

dotenv.config();

logger.setLevel("info");

startServer();
