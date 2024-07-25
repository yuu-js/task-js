const db = require('../connection')

const getUser = async () => {
  try {
    const data = await db.query("SELECT * FROM login ORDER BY id ASC");
    return data.rows;
  } catch (error) {
    console.log(error)
    return error
  }
};

const postUser  = async (data) => {
    try {
        const response = await db.query("INSERT INTO login (name, email, phone, password, is_agreement) VALUES ($1, $2, $3, $4, $5) RETURNING *", [data.name, data.email, data.password, data.is_agreement]);
        return response.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

const editUser = async (data, id) => {
    try {
        const data = await db.query("UPDATE login SET name = $1 email= $2 phone = $3 password = $4 WHERE id = $5 RETURNING *", [data.name, data.email, data.email, data.password, id]);
        return data.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteUser = async (id) => {
    try {
        const data = await db.query("DELETE FROM login WHERE id = $1 RETURNING *", [id]);
        return data.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

const checkUserByEmail = async (email) => {
    try {
        const data = await db.query("SELECT * FROM login WHERE email = $1", [email]);
        return data.rows
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getUser, postUser, editUser, deleteUser, checkUserByEmail }