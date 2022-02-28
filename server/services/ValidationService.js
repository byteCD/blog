const ErrorService = require("./ErrorService");
const { validationResult } = require("express-validator");
const { body } = require("express-validator");

class ValidationService {
  checkErrors(req) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ErrorService(400, errors.array()[0].msg);
    }
  }

  userValidation() {
    return [
      body("username")
        .trim()
        .notEmpty()
        .withMessage("Имя пользователя не может быть пустым")
        .isLength({ min: 3 })
        .withMessage("Минимальная длина имени пользователя - 3 символа")
        .isLength({ max: 30 })
        .withMessage("Максимальная длина имени пользователя - 30 символов"),

      body("password")
        .trim()
        .notEmpty()
        .withMessage("Пароль не может быть пустым")
        .isLength({ min: 6 })
        .withMessage("Минимальная длина пароля - 6 символов"),
    ];
  }

  postValidation() {
    return [
      body("title")
        .trim()
        .notEmpty()
        .withMessage("Заголовок не может быть пустым"),

      body("textPreview")
        .trim()
        .notEmpty()
        .withMessage("Превью не может быть пустым"),

      body("text").trim().notEmpty().withMessage("Текст не может быть пустым"),
    ];
  }

  commentValidation() {
    return [
      body("text")
        .trim()
        .notEmpty()
        .withMessage("Текст комментария не может быть пустым"),
    ];
  }
}

module.exports = new ValidationService();
