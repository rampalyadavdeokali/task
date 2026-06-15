const catererModel = require("../models/caterer.model");

async function getAllCaterers() {
  return catererModel.findAll();
}

async function getCatererById(id) {
  return catererModel.findById(id);
}

async function createCaterer(payload) {
  return catererModel.create(payload);
}

module.exports = {
  getAllCaterers,
  getCatererById,
  createCaterer
};
