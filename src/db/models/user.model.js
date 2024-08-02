const conn = require('../config/connection');

const create = (emailUser, passwordUser, nameUser) => conn.execute(
  `INSERT INTO users
    (email, password, name, role)
    VALUES (?, ?, ?, ?)`,
    [emailUser, passwordUser, nameUser, "athlete"]
)

const show = () => conn.execute(
    'SELECT * FROM users;'
);

const login = (emailUser, passwordUser) => conn.execute(
  `SELECT * FROM users
    WHERE email = ? AND password = ?`,
  [emailUser, passwordUser]
)

module.exports = {
  show,
  login,
  create,
};
