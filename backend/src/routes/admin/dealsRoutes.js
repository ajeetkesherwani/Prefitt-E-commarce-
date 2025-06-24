const express = require("express");
const router = express.Router();

const fileUploader = require("../../middlewares/fileUploader");
const {
  adminAuthenticate,
} = require("../../controllers/admin/auth/adminAuthenticate");
const {
  getDealsOfTheDay,
} = require("../../controllers/admin/dealsOfTheDayController/getDealsOfTheDay");
const {
  createDealsOfTheDay,
} = require("../../controllers/admin/dealsOfTheDayController/createDealsOfTheDay");

const {
  updateDealsOfTheDay,
} = require("../../controllers/admin/dealsOfTheDayController/updateDealsOfTheDay");

const {
  deleteDealsOfTheDay,
} = require("../../controllers/admin/dealsOfTheDayController/deleteDealsOfTheDay");

router.get("/list", adminAuthenticate, getDealsOfTheDay);
router.post(
  "/create",
  adminAuthenticate,
  fileUploader("dealsOfTheDay", [{ name: "image", maxCount: 1 }]),
  createDealsOfTheDay
);
router.patch(
  "/update/:id",
  adminAuthenticate,
  fileUploader("dealsOfTheDay", [{ name: "image", maxCount: 1 }]),
  updateDealsOfTheDay
);
router.delete("/delete/:id", adminAuthenticate, deleteDealsOfTheDay);
module.exports = router;
