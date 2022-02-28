const ErrorService = require("../services/ErrorService");
const tokenService = require("../services/TokenService");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw new ErrorService(401, "Пользователь не авторизован");
    }

    const decodedToken = tokenService.decodeToken(token);
    req.user = decodedToken;

    next();
  } catch (error) {
    throw new ErrorService(401, "Пользователь не авторизован");
  }
};

module.exports = authMiddleware;
