import express from "express";
import {
  createAccount,
  deleteAccount,
  verifyAccount,
} from "../controllers/account";

export function getAccountRoutes() {
  const router = express.Router();

  router.route("/create").post(createAccount);
  router.route("/delete").delete(deleteAccount);
  router.route("/verify").post(verifyAccount);

  return router;
}
