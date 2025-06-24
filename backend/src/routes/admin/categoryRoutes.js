const express = require("express");
const router = express.Router();
const fileUploader = require("../../middlewares/fileUploader");
const {
  adminAuthenticate,
} = require("../../controllers/admin/auth/adminAuthenticate");
const {
  getCategory,
} = require("../../controllers/admin/categoryController/getCategory");
const {
  createCategory,
} = require("../../controllers/admin/categoryController/createCategory");
const {
  updateCategory,
} = require("../../controllers/admin/categoryController/updateCategory");
const {
  deleteCategory,
} = require("../../controllers/admin/categoryController/deleteCategory");

const {
  getCategoryByServiceId,
} = require("../../controllers/admin/categoryController/getCategoryByServiceId");

const {
  getSubCategory,
} = require("../../controllers/admin/categoryController/getSubCategory");

router.get("/list", adminAuthenticate, getCategory);
router.post(
  "/create",
  adminAuthenticate,
  fileUploader("category", [{ name: "image", maxCount: 1 }]),
  createCategory
);

router.patch(
  "/update/:id",
  adminAuthenticate,
  fileUploader("category", [{ name: "image", maxCount: 1 }]),
  updateCategory
);
router.delete("/delete/:id", adminAuthenticate, deleteCategory);

router.get("/getSubCategory/:id", adminAuthenticate, getSubCategory);
router.get(
  "/getCategoryByServiceId/:serviceId",
  adminAuthenticate,
  getCategoryByServiceId
);
module.exports = router;
