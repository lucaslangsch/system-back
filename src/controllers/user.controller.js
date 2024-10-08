const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showUsers = async (req, res) => {
  const { status, data } = await userService.showUsers()
  return res.status(mapStatusHTTP(status)).json(data);
};

const getUser = async (req, res) => {
  const { status, data } = await userService.getUser(req.user)
  return res.status(mapStatusHTTP(status)).json(data);
}

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body)
  return res.status(mapStatusHTTP(status)).json(data);
};

const login = async (req, res) => {
  const { status, data } = await userService.login(req.body)
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showUsers,
  createUser,
  login,
  getUser,
};
