function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateCaterer(req, res, next) {
  const { name, location, pricePerPlate, cuisines, rating } = req.body;
  const errors = [];

  if (!isNonEmptyString(name)) {
    errors.push("name is required and must be a string");
  }

  if (!isNonEmptyString(location)) {
    errors.push("location is required and must be a string");
  }

  if (typeof pricePerPlate !== "number" || Number.isNaN(pricePerPlate) || pricePerPlate <= 0) {
    errors.push("pricePerPlate is required and must be a positive number");
  }

  if (
    !Array.isArray(cuisines) ||
    cuisines.length === 0 ||
    cuisines.some((item) => !isNonEmptyString(item))
  ) {
    errors.push("cuisines is required and must be a non-empty array of strings");
  }

  if (typeof rating !== "number" || Number.isNaN(rating) || rating < 0 || rating > 5) {
    errors.push("rating is required and must be a number between 0 and 5");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: "Validation failed",
      errors
    });
  }

  next();
}

module.exports = validateCaterer;
