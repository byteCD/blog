const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const validationService = require("../services/ValidationService");
const mongoose = require("mongoose");
const ErrorService = require("../services/ErrorService");
const CommentModel = require("../models/CommentModel");

class PostController {
  async getPosts(req, res, next) {
    try {
      const posts = await PostModel.find({});

      res.json(posts);
    } catch (error) {
      next(error);
    }
  }

  async getPost(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID поста");
      }

      const post = await PostModel.findById(id).populate({
        path: "user",
        select: "_id username",
      });

      if (!post) {
        throw new ErrorService(404, "Пост не найден");
      }

      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  async addPost(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { title, textPreview, text, category, image } = req.body;
      const { _id } = req.user.user;

      const post = await PostModel.create({
        title,
        textPreview,
        text,
        category,
        user: _id,
        image,
      });

      await UserModel.findOneAndUpdate({ _id }, { $push: { posts: post._id } });

      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID поста");
      }

      const post = await PostModel.findByIdAndDelete(id);

      await UserModel.findOneAndUpdate(
        { _id: post.user },
        { $pull: { posts: id } }
      );

      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  async editPost(req, res, next) {
    try {
      validationService.checkErrors(req);

      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID поста");
      }

      const { title, textPreview, text, category, image } = req.body;

      const post = await PostModel.findByIdAndUpdate(id, {
        title,
        textPreview,
        text,
        category,
        image,
      });

      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  async getPostComments(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ErrorService(400, "Неверный ID поста");
      }

      const comments = await CommentModel.find({ post: id }).populate({
        path: "user",
        select: "_id username",
      });

      res.json(comments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
