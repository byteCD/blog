const Router = require("express");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");

const router = Router();

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);

module.exports = router;
