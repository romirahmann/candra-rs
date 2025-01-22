const model = require("../../models/employee");
const api = require("../../tools/common");

const getEmployees = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getEmployee = async (req, res) => {
  const { nik } = req.params;
  try {
    let data = await model.getByNik(nik);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertEmployee = async (req, res) => {
  const dataEmployee = req.body;
  try {
    let data = await model.insert(dataEmployee);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateEmployee = async (req, res) => {
  const { nik } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(nik, newData);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteEmployee = async (req, res) => {
  const { nik } = req.params;
  try {
    let data = await model.remove(nik);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getEmployee,
  getEmployees,
  insertEmployee,
  updateEmployee,
  deleteEmployee,
};
