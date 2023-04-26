import express from "express";
import { verifyAccount } from "../controllers/account";

export function getAccountRoutes() {
  const router = express.Router();

  router.route("/verify").post(verifyAccount);

  return router;
}
