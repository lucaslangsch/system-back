// const jwtUtils = require('../utils/jwt.util');
// const { Users } = require('../db/models/index.js');

const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showUsers = async (req, res) => {
  const { status, data } = await userService.showUsers()
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showUsers,
};

// const create = async (req, res) => {
//   const { email, password, name } = req.body;

//   if (!email || !password || !name) {
//     res.status(422).json({ status: "fail", data: 'Dados incompletos' });
//   }

//   try {
//     const [result] = await userModel.create(email, password, name);

//     const dataUser = { id: result.insertId, email };
  
//     const token = jwtUtils.createToken(dataUser);
  
//     const data = { ...dataUser, token }
//     return res.status(200).json({ status: 'success', data })
//   } catch (error) {
//     return res.status(500).json({ status: 'fail', data: error.message })
//   }
// };

// const update = async (req, res) => {
//  return
// };

// const show = async (req, res) => {
//   const users = await Users.findAll();
//   return res.status(200).json({ status: 'success', data: users })

  // try {
  //   const [result] = await userModel.show()
  // } catch (error) {
    // return res.status(500).json({ status: 'fail', data: error.message })
  // }
//  };

//  const auth = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     res.status(422).json({ status: "fail", data: 'email ou senha vazios' });
//   }

//   try {
//     const [result] = await userModel.login(email, password);
//     if (result.length < 1) {
//       throw new Error()
//     }

//     const dataUser = { id: result[0].id, email: result[0].email };

//     const token = jwtUtils.createToken(dataUser);

//     const data = { ...dataUser, token }

//     res.status(200).json({ status: "success", data });
//   } catch (error) {
//     res.status(422).json({ status: "fail", data: 'email ou senha inválido' });
//   }
//  }
