const db = require("../database/db.config");

const getAll = async () =>
  await db
    .select("employee_name", "employee_nik", "submittedby")
    .from("employees");

const getByNik = async (nik) =>
  await db
    .select("employee_name", "employee_nik", "submittedby")
    .from("employees")
    .where("employee_nik", nik);

const insert = async (data) => await db("employees").insert(data);
const update = async (nik, data) =>
  await db("employees").where("employee_nik", nik).update(data);

const remove = async (nik) =>
  await db("employees").where("employee_nik", nik).delete();

module.exports = {
  getAll,
  getByNik,
  insert,
  update,
  remove,
};
