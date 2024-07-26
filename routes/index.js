const express = require("express");
const { user, post, edit, deleteUser } = require("../controller/userController");
const { user_recipe, post_recipe, edit_recipe, delete_recipe } = require("../controller/recipeController");
const {register, login} = require("../controller/authController")
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

// user
router.get('/', verifyToken, user)
router.post("/route/post", post)
router.put("/route/put/:ID", edit)
router.delete("/route/delete/:IDS", deleteUser)

// add recipe
router.get("/route/get_recipe", user_recipe)
router.post("/route/post_recipe", post_recipe)
router.put("/route/put_recipe/:ID", edit_recipe)
router.delete("/route/delete_recipe/:IDS", delete_recipe)

// auth
router.post("/auth/register", register)
router.post("/auth/login", login)

module.exports = router;