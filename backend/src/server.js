const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
