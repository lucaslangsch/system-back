const { paymentService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const processPayment = async (req, res) => {
  const { status, data } = await paymentService.processPayment(req)
  return res.status(status).json(data);
};

module.exports = {
  processPayment,
};
