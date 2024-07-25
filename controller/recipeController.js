const {getRecipe, postRecipe, editRecipe, deleteRecipe} = require("../model/recipeModel")

const getRecipeController = async (req, res) => {
    try {
        const data = await getRecipe()
        if(!data) throw new Error("Data Not Found")
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const postRecipeController = async (req, res) => {
    try {
        const data = await postRecipe(req.body?.name)
        if(!data) throw new Error("Data Not Found")
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const editRecipeController = async (req, res) => {
    try {
        const data = await editRecipe(req.params?.ID, req.body?.name)
        if(!data) throw new Error("Data Not Found")
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const deleteRecipeController = async (req, res) => {
    try {
        const data = await deleteRecipe(req.params?.ID)
        if(!data) throw new Error("Data Not Found")
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { user_recipe: getRecipeController, post_recipe: postRecipeController, edit_recipe: editRecipeController, delete_recipe: deleteRecipeController }