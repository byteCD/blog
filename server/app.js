require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rootRouter = require("./routers/rootRouter");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5555;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use("/api", rootRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("Подключение к базе данных прошло успешно"));

    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
