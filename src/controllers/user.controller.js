const { response } = require('../app');
const { userModel } = require('../db/models/index')

const create = async (req, res) => {
  return
};

const update = async (req, res) => {
 return
};

const show = async (req, res) => {
  try {
    const [result] = await userModel.show()
    return res.status(200).json({ data: result, response: 'success' })
  } catch (error) {
    return res.status(500).json({ response: 'fail', data: error.message })
  }
 };

module.exports = {
  create,
  update,
  show,
}