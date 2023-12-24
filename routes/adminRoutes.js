const express = require("express");
const authMiddelware = require("../middleware/authMiddleware.js");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware.js");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddleware,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;