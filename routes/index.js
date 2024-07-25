const express = require("express");
const { user, post, edit, deleteUser } = require("../controller/userController");
const { user_recipe, post_recipe, edit_recipe, delete_recipe } = require("../controller/recipeController");
const {register, login} = require("../controller/authController")
const { verifyToken } = require("../midleware/verifyToken");
const router = express.Router();

// user
router.get('/', verifyToken, user)
router.post("/route/post", post)
router.put("/route/put/:ID", edit)
router.delete("/route/delete/:IDS", deleteUser)

// add recipe
router.get('/', verifyToken, user_recipe)
router.post("/route/post", post_recipe)
router.put("/route/put/:ID", edit_recipe)
router.delete("/route/delete/:IDS", delete_recipe)

// auth
router.post("/auth/register", register)
router.post("/auth/login", login)

module.exports = router;