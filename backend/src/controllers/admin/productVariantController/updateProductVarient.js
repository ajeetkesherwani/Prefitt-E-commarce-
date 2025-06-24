const ProductVariant = require("../../../models/productVariant");
const AppError = require("../../../utils/AppError");
const catchAsync = require("../../../utils/catchAsync");

const validateRequiredField = (field, fieldName) => {
  if (!field || !field.trim())
    return new AppError(`${fieldName} is required.`, 400);
  return null;
};

exports.updateProductVarient = catchAsync(async (req, res) => {
  let id = req.params.id;
  const { serviceId, variantTypeId, variants } = req.body;

  const requiredFields = [
    { field: serviceId, name: "Service Id" },
    { field: variantTypeId, name: "variantType ID" },
    { field: variants, name: "variants" },
  ];

  for (const { field, name } of requiredFields) {
    const error = validateRequiredField(field, name);
    if (error) return next(error);
  }

  let prodVarient = await ProductVariant.findById(id);
  if (!prodVarient) {
    return res.status(404).json({
      success: false,
      message: "Product Varient not found",
    });
  }

  prodVarient.serviceId = serviceId || prodVarient.serviceId;
  prodVarient.variantTypeId = variantTypeId || prodVarient.variantTypeId;
  prodVarient.variants = variants || prodVarient.variants;

  await prodVarient.save();

  return res.status(200).json({
    status: true,
    message: "Product Varient updated successfully",
    data: { prodVarient },
  });
});
