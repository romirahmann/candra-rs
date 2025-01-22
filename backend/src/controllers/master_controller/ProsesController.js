const model = require("../../models/proses.model");
const api = require("../../tools/common");

const getAllProses = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getProsesByCode = async (req, res) => {
  const { code } = req.params;
  try {
    let data = await model.getByCode(code);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertProses = async (req, res) => {
  const dataProses = req.body;
  try {
    let data = await model.insert(dataProses);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateProses = async (req, res) => {
  const { code } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(code, newData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteProses = async (req, res) => {
  const { code } = req.params;
  try {
    let data = await model.remove(code);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllProses,
  getProsesByCode,
  insertProses,
  updateProses,
  deleteProses,
};
