const conn = require('./config/connection');

const show = () => conn.execute(
    'SELECT * FROM users;'
);

const createTable = () => conn.execute(
  `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );`
);

const createUser = (nameUser, emailUser, passwordUser) => conn.execute(
  `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
  [nameUser, emailUser, passwordUser]
);

const loginUser = (emailUser, passwordUser) => conn.execute(
  `SELECT * FROM users
    WHERE email = ? AND password = ?`,
  [emailUser, passwordUser]
)

module.exports = {
  show,
  createTable,
  createUser,
  loginUser,
};