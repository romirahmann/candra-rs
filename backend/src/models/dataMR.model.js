const db = require("../database/db.config");

const getAll = async () =>
  db
    .select(
      "mr_no_urut",
      "mr_kode_checklist",
      "mr_no_MR",
      "mr_nama_pasien",
      "mr_date",
      "mr_qty_images",
      "created_at",
      "finished_at",
      "mr_no_box"
    )
    .from("tbldatamr")
    .where("mr_isAktif", 1)
    .andWhere("mr_isDeleted", 0);

const getByNoUrutKodeChecklist = async (NoUrut, KodeChecklist) =>
  await db
    .select(
      "mr_no_urut",
      "mr_kode_checklist",
      "mr_no_MR",
      "mr_nama_pasien",
      "mr_date",
      "mr_qty_images",
      "created_at",
      "finished_at",
      "mr_no_box"
    )
    .from("tbldatamr")
    .where("mr_no_urut", NoUrut)
    .andWhere("mr_kode_checklist", KodeChecklist)
    .andWhere("mr_isDeleted", 0);

const insert = async (data) => db("tbldatamr").insert(data);
const update = async (NoUrut, KodeChecklist, data) =>
  db("tbldatamr")
    .where("mr_no_urut", NoUrut)
    .andWhere("mr_kode_checklist", KodeChecklist)
    .update(data);

const allNonaktif = async () =>
  await db
    .select(
      "mr_no_urut",
      "mr_kode_checklist",
      "mr_no_MR",
      "mr_nama_pasien",
      "mr_date",
      "mr_qty_images",
      "created_at",
      "finished_at",
      "mr_no_box"
    )
    .from("tbldatamr")
    .where("mr_isAktif", 0)
    .andWhere("mr_isDeleted", 0);

const deleted = async (NoUrut, KodeChecklist) =>
  db("tbldatamr")
    .where("mr_no_urut", NoUrut)
    .andWhere("mr_kode_checklist", KodeChecklist)
    .deleted();

module.exports = {
  getAll,
  getByNoUrutKodeChecklist,
  insert,
  update,
  allNonaktif,
  deleted,
};
