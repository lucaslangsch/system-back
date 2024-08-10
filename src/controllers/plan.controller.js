const { planService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showPlans = async (req, res) => {
  const { status, data } = await planService.showPlans()
  return res.status(mapStatusHTTP(status)).json(data);
};

const showPrePlans = async (req, res) => {
  const { status, data } = await planService.showPrePlans()
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showPlans,
  showPrePlans,
};
