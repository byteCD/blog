const Router = require("express");
const postController = require("../controllers/PostController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const validationService = require("../services/ValidationService");

const router = Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post(
  "/",
  authMiddleware,
  roleMiddleware("Администратор"),
  validationService.postValidation(),
  postController.addPost
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("Администратор"),
  postController.deletePost
);
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("Администратор"),
  validationService.postValidation(),
  postController.editPost
);
router.get("/:id/comments", postController.getPostComments);

module.exports = router;
