const model = require("../../models/target.model");
const api = require("../../tools/common");

const getAllTarget = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getTargetById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const insertTarget = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.insert(newData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const updateTarget = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(id, newData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

const deleteTarget = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.del(id);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
module.exports = {
  getAllTarget,
  getTargetById,
  insertTarget,
  updateTarget,
  deleteTarget,
};
