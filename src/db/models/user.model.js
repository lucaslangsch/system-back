const conn = require('../config/connection');

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
}
