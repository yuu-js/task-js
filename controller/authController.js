const { registerUser, loginUser } = require("../service/authService");
const register = async (req, res) => {
  try {
    console.log(req.body);
    let nama = req.body?.name;
    let email = req.body?.email;
    let phone = req.body?.phone;
    let password = req.body?.password;
    let is_agreement = req.body?.is_agreement;
    if (!email) {
      return res.send("Email cannot be empty");
    }
    if (!phone) {
        return res.send("Phone Number cannot be empty");
      }
    if (!password) {
      return res.send("Password cannot be empty");
    }
    if (!is_agreement) {
      return res.send("Agreement cannot be empty");
    }

    if (email && phone && password && is_agreement) {
      const data = await registerUser({
        name: nama,
        email: email,
        phone: phone,
        password: password,
        is_agreement: is_agreement,
      });
      console.log(data);
      if (data != null) {
        res.send(data);
      } else {
        res.send(`Email ${email} has been registered`);
      }
    } else {
      res.send("Data cannot be empty");
    }
  } catch (error) {
    console.error("controller", error);
    res.send(error);
  }
};

const login = async (req, res) => {
  try {
    let email = req.body?.email;
    let password = req.body?.password;
    let conf_password = req.body?.conf_password;
    if (conf_password !== password) {
      return res.send("Confirm password is not the same");
    } else {
      if (email && password) {
        const data = await loginUser({ email: email, password: password });
        if (data != null) {
          res.send(data);
        } else {
          res.send("Wrong password or email");
        }
      } else {
        res.send("Data cannot be empty");
      }
    }
  } catch (error) {
    console.error("controller", error);
    res.send(error);
  }
};
    
module.exports = { register, login };
