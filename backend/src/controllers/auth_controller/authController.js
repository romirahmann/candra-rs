const bcrypt = require("bcrypt");
const model = require("../../models/auth.model");
const api = require("../../tools/common");
const { generateToken } = require("../../services/auth.service");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return api.error(res, "Please provide both username and password", 400);
  }

  let user = await model.login(username);
  if (user.length > 0) {
    const passwordIsMacth = bcrypt.compare(password, user[0].password);
    if (passwordIsMacth) {
      const payload = {
        userId: user[0].user_id,
        username: user[0].username,
        roleId: user[0].role_id,
        roleName: user[0].role_name,
      };
      const token = generateToken(payload);
      res.json({ token, user: payload });
    } else {
      return api.error(res, "Incorrect Password!", 400);
    }
  } else {
    return api.error(res, "Account Not Found", 404);
  }
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  try {
    const passwordIsMacth = await argon2.verify(hashedPassword, plainPassword);
    return passwordIsMacth;
  } catch (err) {
    console.log("Error verifying password", err);
    throw err;
  }
};

module.exports = {
  login,
};
