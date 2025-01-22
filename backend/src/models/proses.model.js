const db = require("../database/db.config");

const getAll = async () =>
  await db
    .select("proses_code", "proses_name", "proses_order", "submittedby")
    .from("proses");

const getByCode = async (code) =>
  await db
    .select("proses_code", "proses_name", "proses_order", "submittedby")
    .from("proses")
    .where("proses_code", code);

const insert = async (data) => await db("proses").insert(data);
const update = async (code, data) =>
  await db("proses").where("proses_code", code).update(data);

const remove = async (code) =>
  await db("proses").where("proses_code", code).delete();

module.exports = {
  getAll,
  getByCode,
  insert,
  update,
  remove,
};
