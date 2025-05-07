require("dotenv").config();
const { log } = console;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;
const userRoutes = require("../Routes/userRoutes.js")
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/user", userRoutes)

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found from server" });
});

app.listen(port, () => {
  log(`Server is running on port ${port}`);
});
