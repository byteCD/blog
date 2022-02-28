const CommentModel = require("../models/CommentModel");
const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const validationService = require("../services/ValidationService");
const mongoose = require("mongoose");
const ErrorService = require("../services/ErrorService");

class CommentController {
  async addComment(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { id } = req.params;
      const { text } = req.body;
      const { _id } = req.user.user;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID поста");
      }

      const comment = await CommentModel.create({
        text,
        user: _id,
        post: id,
      });

      await UserModel.findOneAndUpdate(
        { _id },
        { $push: { comments: comment._id } }
      );

      await PostModel.findOneAndUpdate(
        { id },
        { $push: { comments: comment._id } }
      );

      res.json(comment);
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(req, res, next) {
    try {
      const { id } = req.params;
      const { _id, role } = req.user.user;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID комментария");
      }

      const comment = await CommentModel.findById(id).populate({
        path: "user",
        select: "_id role",
      });

      if (_id !== comment.user._id.toString()) {
        if (role !== "Администратор") {
          throw new ErrorService(403, "Нет доступа");
        }
      }

      await CommentModel.findByIdAndDelete(id);

      await UserModel.findOneAndUpdate(
        { _id: comment.user._id },
        { $pull: { comments: id } }
      );

      await PostModel.findOneAndUpdate(
        { _id: comment.post },
        { $pull: { comments: id } }
      );

      res.json(comment);
    } catch (error) {
      next(error);
    }
  }

  async editComment(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { id } = req.params;
      const { text } = req.body;
      const { _id, role } = req.user.user;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID комментария");
      }

      const comment = await CommentModel.findById(id).populate({
        path: "user",
        select: "_id role",
      });

      if (_id !== comment.user._id.toString()) {
        if (role !== "Администратор") {
          throw new ErrorService(403, "Нет доступа");
        }
      }

      await CommentModel.findByIdAndUpdate(id, { text });

      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CommentController();
