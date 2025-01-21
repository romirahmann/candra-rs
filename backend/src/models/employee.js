const db = require("../database/db.config");

const getAll = async () =>
  await db
    .select("employee_name", "employee_nik", "submittedby")
    .from("employees");

const getById = async (nik) =>
  await db
    .select("employee_name", "employee_nik", "submittedby")
    .from("employees")
    .where("employee_nik", nik);

const insert = async (data) => await db("employees").insert(data);
const update = async (nik, data) =>
  await db("employees").where("employee_nik", nik).update(data);

module.exports = {
  getAll,
  getById,
  insert,
  update,
};
