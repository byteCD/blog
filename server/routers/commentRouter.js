const Router = require("express");
const commentController = require("../controllers/CommentController");
const authMiddleware = require("../middlewares/authMiddleware");
const validationService = require("../services/ValidationService");

const router = Router();

router.post(
  "/:id",
  authMiddleware,
  validationService.commentValidation(),
  commentController.addComment
);
router.delete("/:id", authMiddleware, commentController.deleteComment);
router.put(
  "/:id",
  authMiddleware,
  validationService.commentValidation(),
  commentController.editComment
);

module.exports = router;
