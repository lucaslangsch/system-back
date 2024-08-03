const { Users } = require('../db/models/index');

const showUsers = async () => {
  const users = await Users.findAll();
  if (users.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum usuário cadastrado' } };
  return { status: 'SUCCESSFUL', data: users };
};

module.exports = {
  showUsers,
};