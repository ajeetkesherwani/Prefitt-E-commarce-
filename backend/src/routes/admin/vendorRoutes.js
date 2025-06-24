const express = require("express");
const router = express.Router();

const fileUploader = require("../../middlewares/fileUploader");
const {
  adminAuthenticate,
} = require("../../controllers/admin/auth/adminAuthenticate");
const {
  getVendorList,
} = require("../../controllers/admin/vendorController/getVendorList");

router.get("/list", adminAuthenticate, getVendorList);
module.exports = router;
