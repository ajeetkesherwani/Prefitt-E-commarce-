const Vendor = require("../../../models/vendor");
const AppError = require("../../../utils/AppError");
const catchAsync = require("../../../utils/catchAsync");

exports.sendOtp = catchAsync(async (req, res, next) => {
  let { mobile } = req.body;
  if (!mobile) return next(new AppError("mobile field are required.", 400));

  const vendor = await Vendor.findOne({ mobile });

  if (!vendor.status)
    return next(
      new AppError("You are not verified. Wait for verification", 403)
    );

  if (vendor.isBlocked) return next(new AppError("You are blocked", 403));

  //   const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otp = "1234";
  vendor.otp = otp;
  vendor.otpExpires = Date.now() + 10 * 60 * 1000;
  await vendor.save();

  // await sendSms(vendor.mobile, `Your OTP is ${otp}`);

  res.status(200).json({
    status: "success",
    message: "OTP sent successfully",
    otp: process.env.NODE_ENV === "development" ? otp : "1234", // Only send OTP in dev mode
  });
});
