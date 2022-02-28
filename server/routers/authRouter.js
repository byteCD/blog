const Router = require("express");
const authController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/authMiddleware");
const validationService = require("../services/ValidationService");

const router = Router();

router.post(
  "/signup",
  validationService.userValidation(),
  authController.signUp
);
router.post(
  "/signin",
  validationService.userValidation(),
  authController.signIn
);
router.get("/", authMiddleware, authController.auth);

module.exports = router;
