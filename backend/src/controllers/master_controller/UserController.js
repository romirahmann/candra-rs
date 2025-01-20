const model = require("../../models/user.model");
const api = require("../../tools/common");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const newUser = req.body;
  try {
    newUser.password = await hashPassword(newUser.password);
    console.log(newUser);
    let data = await model.insert(newUser);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, `Internal Server Error ${e}`, 500);
  }
};

const hashPassword = async (plainPassword) => {
  try {
    const saltRounds = 15;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (e) {
    console.error("Error hasing password: ", e);
    throw e;
  }
};
module.exports = {
  register,
};
