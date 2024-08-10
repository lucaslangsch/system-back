const { Plans } = require('../db/models/index');

const showPlans = async () => {
  const plans = await Plans.findAll();
  if (plans.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
  return { status: 'SUCCESSFUL', data: plans };
};

const showPrePlans = async () => {
  const data = await fetch('https://api.mercadopago.com/preapproval_plan/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer APP_USR-879614550147882-073014-fb9ab524901da795736e328ca2610c59-1924574034'
    },
  });
  const plans = await data.json()
  console.log(plans)
  if (plans.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhum plano cadastrado' } };
  return { status: 'SUCCESSFUL', data: plans };
};

module.exports = {
  showPlans,
  showPrePlans
};
