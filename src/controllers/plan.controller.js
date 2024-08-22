const { planService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showPlans = async (req, res) => {
  const { status, data } = await planService.showPlans()
  return res.status(mapStatusHTTP(status)).json(data);
};

const showPlan = async (req, res) => {
  const { status, data } = await planService.showPlan(req)
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showPlans,
  showPlan,
};
