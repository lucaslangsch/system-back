const jwt = require('jsonwebtoken')
const { userModel } = require('../db/models/index');

const create = async (req, res) => {
  return
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

 const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ status: "fail", data: 'email ou senha vazios' });
  }

  try {
    const [result] = await userModel.login(email, password);
    if (result.length < 1) {
      throw new Error()
    }

    const token = jwt.sign({ id: result[0].id, email: result[0].email }, 'supersegredo')

    const data = { ...result[0], token }

    res.status(200).json({ status: "success", data });
  } catch (error) {
    console.log(error);
    res.status(422).json({ status: "fail", data: 'email ou senha inválido' });
  }
 }

module.exports = {
  create,
  update,
  show,
  login,
}