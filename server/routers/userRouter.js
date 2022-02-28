const Router = require("express");
const userController = require("../controllers/UserController");

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.get("/:id/posts", userController.getUserPosts);
router.get("/:id/comments", userController.getUserComments);

module.exports = router;
