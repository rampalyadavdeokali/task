const path = require("path");

const fileDb = require("../utils/fileDb");

const dataFilePath = path.join(__dirname, "..", "data", "caterers.json");

function getNextId(caterers) {
  if (caterers.length === 0) {
    return 1;
  }

  const highestId = Math.max(...caterers.map((item) => item.id));
  return highestId + 1;
}

function buildCaterer(payload, nextId) {
  return {
    id: nextId,
    name: payload.name.trim(),
    location: payload.location.trim(),
    pricePerPlate: payload.pricePerPlate,
    cuisines: payload.cuisines.map((item) => item.trim()),
    rating: payload.rating
  };
}

async function findAll() {
  return fileDb.readJson(dataFilePath);
}

async function findById(id) {
  const caterers = await findAll();
  return caterers.find((caterer) => caterer.id === Number(id)) || null;
}

async function create(payload) {
  const caterers = await findAll();
  const nextId = getNextId(caterers);
  const newCaterer = buildCaterer(payload, nextId);

  caterers.push(newCaterer);
  await fileDb.writeJson(dataFilePath, caterers);

  return newCaterer;
}

module.exports = {
  findAll,
  findById,
  create
};
