const db = require("../database/db.config");

const login = async (username) =>
  await db
    .select("u.user_id", "u.username", "u.password", "u.role_id", "r.role_name")
    .from("users as u")
    .innerJoin("user_role as r", "u.role_id", "r.role_id")
    .where("username", username);

module.exports = {
  login,
};
