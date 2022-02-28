const UserModel = require("../models/UserModel");
const ErrorService = require("../services/ErrorService");
const bcrypt = require("bcrypt");
const validationService = require("../services/ValidationService");
const tokenService = require("../services/TokenService");

class UserController {
  async signUp(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { username, password } = req.body;
      const newUser = await UserModel.findOne({ username });

      if (newUser) {
        throw new ErrorService(400, "Пользователь уже существует");
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await UserModel.create({ username, password: hashPassword });
      const token = tokenService.generateToken(user);

      res.json({
        token,
        user: { id: user._id, username: user.username, role: user.role },
      });
    } catch (error) {
      next(error);
    }
  }

  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });

      if (!user) {
        throw new ErrorService(400, "Пользователь не существует");
      }

      const comparePasswords = await bcrypt.compare(password, user.password);

      if (!comparePasswords) {
        throw new ErrorService(400, "Неверный пароль");
      }

      const token = tokenService.generateToken(user);

      res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
          posts: user.posts,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async auth(req, res, next) {
    try {
      const { _id } = req.user.user;
      const user = await UserModel.findById(_id);

      res.json({
        token: req.user.token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
          posts: user.posts,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
