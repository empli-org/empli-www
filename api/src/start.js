import express from "express";
import http from "http";
import cors from "cors";
import logger from "loglevel";
import { errorMiddleware } from "./middlewares";
import "express-async-errors"; // for async handlers
import { getRoutes } from "./routes";

export function startServer({ port = process.env.PORT } = {}) {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));
  if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("tiny"));
  }
  app.use(
    cors({
      origin: "*", // TODO: move to env
      credentials: true,
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
      methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    })
  );

  // Register routes
  app.use(getRoutes());

  // generic error handler
  app.use(errorMiddleware);

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`);

      // resolve the whole promise with the express server
      resolve(server);
    });
  });
}
