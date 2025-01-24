const model = require("../../models/user.model");
const api = require("../../tools/common");
const argon2 = require("argon2");

const register = async (req, res) => {
  const newUser = req.body;
  try {
    newUser.password = await hashPassword(newUser.password);
    let data = await model.insert(newUser);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, `Internal Server Error ${e}`, 500);
  }
};

const hashPassword = async (plainPassword) => {
  try {
    const saltRounds = 15;
    const hashedPassword = await argon2.hash(plainPassword, {
      type: argon2.argon2id,
    });
    console.log(hashedPassword);
    return hashedPassword;
  } catch (e) {
    console.error("Error hasing password: ", e);
    throw e;
  }
};

module.exports = {
  register,
};
