import { body, validationResult } from "express-validator";
import { capitalize } from "../helpers/index.js";

export const userRegisterValidation = [
  body("email")
    .exists()
    .withMessage({ msg: "you have to pass an email" })
    .isEmail()
    .withMessage({ msg: "you have to pass an accurate email" })
    .trim()
    .normalizeEmail(),

  body("password")
    .exists()
    .withMessage({ msg: "you have to pass a password" })
    .trim()
    .isLength({ min: 6, max: 16 })
    .withMessage({ msg: " password should between 6 and 16 characters" }),

  body("firstName").exists().trim().escape().isAlpha(),

  body("lastName").exists().trim().isAlpha(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      req.body.firstName = capitalize(req.body.firstName);
      req.body.lastName = capitalize(req.body.lastName);
      next();
    } else {
      res.status(400).send(errors);
    }
  },
];
