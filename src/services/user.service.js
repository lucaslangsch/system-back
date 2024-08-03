const { Users } = require('../db/models/index');
const jwtUtils = require('../utils/jwt.util');

const showUsers = async () => {
  const users = await Users.findAll();
  if (users.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum usuário cadastrado' } };
  return { status: 'SUCCESSFUL', data: users };
};

const createUser = async (body) => {
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return { status: 'INVALID_VALUE', data: { message: 'Campos inválidos' } };
  }

  try {
    const user = await Users.create({ name, password, email });
    if (!user) return { status: 'NOT_FOUND', data: { message: 'Não foi possível cadastrar' } };
    
    const data = { id: user.id, name: user.name, email: user.email };
    const token = jwtUtils.createToken(data);

    return { status: 'SUCCESSFUL', data: { ...data, token } };
  } catch (error) {
    return { status: 'NOT_FOUND', data: { message: 'Email já cadastrado' } };
  }
};

module.exports = {
  showUsers,
  createUser,
};
