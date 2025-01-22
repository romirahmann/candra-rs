const { date } = require("joi");
const db = require("../database/db.config");

const getAll = async () =>
  await db.select("target_id", "target_name", "target_value").from("target");

const getById = async (id) =>
  await db
    .select("target_id", "target_name", "target_value")
    .from("target")
    .where("target_id", id);

const insert = async (data) => await db("target").insert(data);

const update = async (id, data) =>
  await db("target").where("target_id", id).update(data);

const del = async (id) => await db("target").where("target_id", id).delete();

module.exports = {
  getAll,
  getById,
  insert,
  update,
  del,
};
