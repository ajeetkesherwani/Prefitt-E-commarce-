const express = require("express");
const router = express.Router();

const fileUploader = require("../../middlewares/fileUploader");
const {
  createProductVariants,
} = require("../../controllers/admin/productVariantController/createProductVariant");
const {
  updateProductVarient,
} = require("../../controllers/admin/productVariantController/updateProductVarient");
const {
  getAllProductVariant,
} = require("../../controllers/admin/productVariantController/getAllProductVariant");
const {
  adminAuthenticate,
} = require("../../controllers/admin/auth/adminAuthenticate");

router.post("/create", createProductVariants);
router.post("/update/:id", updateProductVarient);
router.get("/list", getAllProductVariant);
module.exports = router;
