const ErrorService = require("../services/ErrorService");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ErrorService) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
    console.log(err);
  }
};

module.exports = errorMiddleware;
