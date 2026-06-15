const catererService = require("../services/caterer.service");

async function getAllCaterers(req, res, next) {
  try {
    const caterers = await catererService.getAllCaterers();
    res.status(200).json(caterers);
  } catch (error) {
    next(error);
  }
}

async function getCatererById(req, res, next) {
  try {
    const caterer = await catererService.getCatererById(req.params.id);

    if (!caterer) {
      return res.status(404).json({
        message: "Caterer not found"
      });
    }

    res.status(200).json(caterer);
  } catch (error) {
    next(error);
  }
}

async function createCaterer(req, res, next) {
  try {
    const caterer = await catererService.createCaterer(req.body);
    res.status(201).json(caterer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCaterers,
  getCatererById,
  createCaterer
};
