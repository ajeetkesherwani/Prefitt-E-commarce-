const express = require("express");
const router = express.Router();
const fileUploader = require("../../middlewares/fileUploader");
const { signUp } = require("../../controllers/vendor/authController/signUp");
const { sendOtp } = require("../../controllers/vendor/authController/sendOtp");
const {
  verifyOtp,
} = require("../../controllers/vendor/authController/verifyOtp");

router.post(
  "/register",
  fileUploader("vendor", [
    { name: "profileImg", maxCount: 1 },
    { name: "panImages", maxCount: 1 },
    { name: "shopImages", maxCount: 1 },
    { name: "digitalSignature", maxCount: 1 },
  ]),
  signUp
);

router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);

module.exports = router;
