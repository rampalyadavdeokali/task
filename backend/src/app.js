const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const catererRoutes = require("./routes/caterer.routes");
const { notFoundHandler, errorHandler } = require("./middlewares/error.middleware");

dotenv.config();

const app = express();
const apiBaseUrl = process.env.API_BASE_URL || "/api";
const catererApiPath = `${apiBaseUrl}/caterers`;

app.use(cors());
app.use(express.json());

app.get(`${apiBaseUrl}/health`, (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
});

app.use(catererApiPath, catererRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
