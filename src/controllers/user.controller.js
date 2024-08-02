const jwtUtils = require('../utils/jwt.util');
const { userModel } = require('../db/models/index');

const create = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.status(422).json({ status: "fail", data: 'Dados incompletos' });
  }

  try {
    const [result] = await userModel.create(email, password, name);

    const dataUser = { id: result.insertId, email };
  
    const token = jwtUtils.createToken(dataUser);
  
    const data = { ...dataUser, token }
    return res.status(200).json({ status: 'success', data })
  } catch (error) {
    return res.status(500).json({ status: 'fail', data: error.message })
  }
};

const update = async (req, res) => {
 return
};

const show = async (req, res) => {
  try {
    const [result] = await userModel.show()
    return res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    return res.status(500).json({ status: 'fail', data: error.message })
  }
 };

 const auth = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ status: "fail", data: 'email ou senha vazios' });
  }

  try {
    const [result] = await userModel.login(email, password);
    if (result.length < 1) {
      throw new Error()
    }

    const dataUser = { id: result[0].id, email: result[0].email };

    const token = jwtUtils.createToken(dataUser);

    const data = { ...dataUser, token }

    res.status(200).json({ status: "success", data });
  } catch (error) {
    res.status(422).json({ status: "fail", data: 'email ou senha inválido' });
  }
 }

module.exports = {
  create,
  update,
  show,
  auth,
}