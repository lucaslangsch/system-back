const conn = require('../config/connection');

const show = () => conn.execute(
    'SELECT * FROM user;'
);

module.exports = {
  show,
}
