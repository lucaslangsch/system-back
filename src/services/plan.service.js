const { Plans } = require('../db/models/index');

const showPlans = async () => {
  try {
    const plans = await Plans.findAll();
    if (plans.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
    return { status: 'SUCCESSFUL', data: plans };
  } catch (error) {
    return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
  }
};

const showPlan = async (req) => {
  const { id } = req.params;
  try {
    const plan = await Plans.findByPk(id)
    if (plan.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
    return { status: 'SUCCESSFUL', data: plan };

  } catch (error) {
    return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
  }
};

module.exports = {
  showPlans,
  showPlan
};
