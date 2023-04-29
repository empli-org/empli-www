import express from "express";
import { createAccount, verifyAccount } from "../controllers/account";

export function getAccountRoutes() {
  const router = express.Router();

  router.route("/create").post(createAccount);
  router.route("/verify").post(verifyAccount);

  return router;
}
