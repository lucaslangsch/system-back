const jwt = require('jsonwebtoken')

const secret = 'meusegredo';

const createToken = (data) => {
  const token = jwt.sign(data, secret);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = {
  createToken,
  verifyToken,
};
