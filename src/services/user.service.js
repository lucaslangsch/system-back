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
    if (!user) return { status: 'INVALID_VALUE', data: { message: 'Não foi possível cadastrar' } };
 
    const data = { id: user.id, email: user.email, name: user.name };
    const token = jwtUtils.createToken(data);

    return { status: 'SUCCESSFUL', data: { ...data, token } };
  } catch (error) {
    return { status: 'INVALID_VALUE', data: { message: 'Email já cadastrado' } };
  }
};

const login = async (body) => {
  const { email, password } = body;
  if (!email || !password) {
    return { status: 'INVALID_VALUE', data: { message: 'Campos inválidos' } };
  }

  const user = await Users.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { status: 'UNAUTHORIZED', data: { message: 'Usuário ou senha inválidos' } };
  }

  const data = { id: user.id, email: user.email, name: user.name };
  const token = jwtUtils.createToken(data);

  return { status: 'SUCCESSFUL', data: { ...data, token } }; 
}

module.exports = {
  showUsers,
  createUser,
  login,
};
