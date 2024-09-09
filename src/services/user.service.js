const { Users, Signatures, Plans } = require('../db/models/index');
const jwtUtils = require('../utils/jwt.util');

const showUsers = async () => {
  const users = await Users.findAll();
  if (users.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum usuário cadastrado' } };
  return { status: 'SUCCESSFUL', data: users };
};

const getUser = async (userData) => {
  const { id } = userData;
  try {
    const user = await Users.findByPk(id, {
      include: {
        model: Signatures,
        as: 'signatures',
        include: [
          {
            model: Plans,
            as: 'plan', 
          },
        ],
      },
    });
    if (!user) return { status: 'INVALID_VALUE', data: { message: 'Nenhum usuário cadastrado' } };
    return { status: 'SUCCESSFUL', data: user };
  } catch (error) {
    return { status: 'INVALID_VALUE', data: { message: 'Erro ao encontrar o usuário' } };
  }
}

const createUser = async (body) => {
  const { name, lastName, email, password } = body;

  if (!name || !email || !password || !lastName) {
    return { status: 'INVALID_VALUE', data: { message: 'Campos inválidos' } };
  }

  try {
    const isUser = await Users.findOne({ where: { email } });
    if (isUser) {
      throw new Error('Usuário já cadastrado')
    }
    const user = await Users.create({ name, password, email, last_name: lastName });
    if (!user) return { status: 'INVALID_VALUE', data: { message: 'Não foi possível cadastrar' } };
    const data = { id: user.id, email: user.email, name: user.name };
    const token = jwtUtils.createToken(data);

    return { status: 'SUCCESSFUL', data: { ...data, token } };
  } catch (error) {
    return { status: 'INVALID_VALUE', data: { message: error.message } };
  }
};

const login = async (body) => {
  const { email, password } = body;
  if (!email || !password) {
    return { status: 'INVALID_VALUE', data: { message: 'Campos inválidos' } };
  }

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return { status: 'UNAUTHORIZED', data: { message: 'Usuário ou senha inválidos' } };
    }
    const data = { id: user.id, email: user.email, name: user.name };
    const token = jwtUtils.createToken(data);

    return { status: 'SUCCESSFUL', data: { ...data, token } };
  } catch (error) {
    return { status: 'UNAUTHORIZED', data: { message: 'Usuário ou senha inválidos' } };
  }

}

module.exports = {
  showUsers,
  createUser,
  login,
  getUser,
};
