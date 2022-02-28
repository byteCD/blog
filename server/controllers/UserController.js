const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const mongoose = require("mongoose");
const ErrorService = require("../services/ErrorService");
const CommentModel = require("../models/CommentModel");

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await UserModel.find({}).select("-password");

      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID пользователя");
      }

      const user = await UserModel.findById(id).select("-password");

      if (!user) {
        throw new ErrorService(404, "Пользователь не найден");
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async getUserPosts(req, res, next) {
    try {
      const { id } = req.params;
      const posts = await PostModel.find({ user: id });

      res.json(posts);
    } catch (error) {
      next(error);
    }
  }

  async getUserComments(req, res, next) {
    try {
      const { id } = req.params;
      const comments = await CommentModel.find({ user: id });

      res.json(comments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
