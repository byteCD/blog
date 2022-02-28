const ErrorService = require("../services/ErrorService");

const roleMiddleware = (userRole) => (req, res, next) => {
  try {
    const { role } = req.user.user;

    if (role !== userRole) {
      throw new ErrorService(403, "Нет доступа");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = roleMiddleware;
