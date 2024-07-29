const express = require("express");
const { user, post, edit, deleteUser } = require("../controller/userController");
const { user_recipe, post_recipe, edit_recipe, delete_recipe } = require("../controller/recipeController");
const {register, login} = require("../controller/authController")
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

// user
router.get('/', verifyToken, user)
router.post("/route/post", post)
router.put("/route/put/:id", edit)
router.delete("/route/delete/:IDS", deleteUser)

// add recipe
router.get("/route/getRecipe", user_recipe)
router.post("/route/postRrecipe", post_recipe)
router.put("/route/putRecipe/:ID", edit_recipe)
router.delete("/route/deleteRecipe/:IDS", delete_recipe)

// auth
router.post("/auth/register", register)
router.post("/auth/login", login)

module.exports = router;