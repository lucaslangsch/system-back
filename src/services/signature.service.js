const { Users, Signatures } = require('../db/models/index');

const createSignature = async (userEmail, mercadoPagoData, planId) => {
  console.log('email', userEmail)
  console.log('mercadoPagoData', mercadoPagoData)
  console.log('planId', planId)
  try {
    const user = await Users.findOne({ where: { email: userEmail } });
    if (!user) {
      throw new Error('User not found =>', userEmail, planId);
    }
  
    const signature = await Signatures.create({
      mercado_pago_id: mercadoPagoData.id,
      active: true,
      begin_at: mercadoPagoData.auto_recurring.start_date,
      expires_at: mercadoPagoData.auto_recurring.end_date,
      planId: planId,
      userId: user.id,
    });
    console.log(signature)
    return signature
    
  } catch (error) {
    return error.message
  }
};

module.exports = {
  createSignature,
};