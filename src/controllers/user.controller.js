// const jwtUtils = require('../utils/jwt.util');
// const { Users } = require('../db/models/index.js');

const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showUsers = async (req, res) => {
  const { status, data } = await userService.showUsers()
  return res.status(mapStatusHTTP(status)).json(data);
};

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body)
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showUsers,
  createUser,
};
