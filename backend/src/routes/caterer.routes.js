const express = require("express");

const catererController = require("../controllers/caterer.controller");
const validateCaterer = require("../middlewares/validate.middleware");

const router = express.Router();

router.get("/", catererController.getAllCaterers);
router.get("/:id", catererController.getCatererById);
router.post("/", validateCaterer, catererController.createCaterer);

module.exports = router;
