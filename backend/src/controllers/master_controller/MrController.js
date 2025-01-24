const model = require("../../models/dataMR.model");
const api = require("../../tools/common");

const getAllMr = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getAllNonaktif = async (req, res) => {
  try {
    let data = await model.allNonaktif();
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getMrBuUrutChecklist = async (req, res) => {
  const { NoUrut, KodeChecklist } = req.params;
  try {
    let data = await model.getByNoUrutKodeChecklist(NoUrut, KodeChecklist);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const addDataMr = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.insert(newData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateDataMr = async (req, res) => {
  const { NoUrut, KodeChecklist } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(NoUrut, KodeChecklist, data);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const softDelete = async (req, res) => {
  const { NoUrut, KodeChecklist } = req.params;
  const updateData = {
    mr_isDeleted: 1,
  };
  try {
    let data = await model.update(NoUrut, KodeChecklist, updateData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteDataMr = async (req, res) => {
  const { NoUrut, KodeChecklist } = req.params;
  try {
    let data = await model.deleted(NoUrut, KodeChecklist);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllMr,
  getAllNonaktif,
  getMrBuUrutChecklist,
  addDataMr,
  updateDataMr,
  softDelete,
  deleteDataMr,
};
