const db = require('../connection')

const getRecipe = async () => {
try {
    const data = await db.query("SELECT * FROM add_recipe ORDER BY id ASC");
    return data.rows;
} catch (error) {
    console.log(error)
    return error
}
};

const postRecipe  = async (data) => {
    try {
        const response = await db.query("INSERT INTO add_recipe (photos, title, ingredients, video) VALUES ($1, $2, $3, $4) RETURNING *", [data.photos, data.title, data.ingredients, data.video]);
        return response.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

const editRecipe = async (data, id) => {
    try {
        const data = await db.query("UPDATE add_recipe SET photos = $1 title= $2 ingredients = $3 video = $4 WHERE id = $5 RETURNING *", [data.photos, data.title, data.ingredients, data.video, id]);
        return data.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteRecipe = async (id) => {
    try {
        const data = await db.query("DELETE FROM add_recipe WHERE id = $1 RETURNING *", [id]);
        return data.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getRecipe, postRecipe, editRecipe, deleteRecipe }