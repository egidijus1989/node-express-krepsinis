const express = require("express");
const morgan = require("morgan");
const app = express();
const participantsRouter = require("./routes/participantsRoutes");
const usersRouter = require("./routes/authRoutes");
const router = express.Router();
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/v1/participants", participantsRouter);
app.use("/api/v1/users", usersRouter);

//Server\\/////////////////////////////////////////////////

module.exports = app;
