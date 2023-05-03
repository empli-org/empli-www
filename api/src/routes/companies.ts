import express from "express";
import {
  createCompany,
  createOffer,
  deleteOffer,
  favProfile,
  getAllCompanies,
  getCompanyOffers,
  getFavProfiles,
} from "../controllers/companies";

export function getCompaniesRoutes() {
  const router = express.Router();

  router.route("/").get(getAllCompanies).post(createCompany);
  router.route("/:id/favs").get(getFavProfiles).put(favProfile);
  router
    .route("/:id/offers")
    .get(getCompanyOffers)
    .post(createOffer)
    .delete(deleteOffer);

  return router;
}
