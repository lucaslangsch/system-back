const { createSignature } = require("./signature.service");

const processPayment = async (req) => {
  console.log(req.body)
  const { formData, planId, mercadoPagoPlanId } = req.body;
  const userEmail = req.user.email;
  try {
    const response = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer APP_USR-879614550147882-073014-fb9ab524901da795736e328ca2610c59-1924574034'
      },
      body: JSON.stringify({
        'card_token_id': formData.token,
        'payer_email': 'test_user_221997266@testuser.com',
        // 'payer_email': formData.payer.email,
        'preapproval_plan_id': mercadoPagoPlanId,
        'status': 'authorized'
      })
    });
    
    
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData)
      return { status: errorData.status, data: { message: errorData.message } };
    }
    const data = await response.json()
    
    const signatureResult = await createSignature(userEmail, data, planId);
    // console.log(signatureResult)
    const dataMock = {
      "id": "3fc2c62d40cd43cca37799ebcb4eb234",
      "payer_id": 1669801415,
      "payer_email": "",
      "back_url": "https://newpace.com.br/",
      "collector_id": 1924574034,
      "application_id": 879614550147882,
      "status": "authorized",
      "reason": "Newpace - Presencial - 1 Modalidade - Semestral",
      "date_created": "2024-08-29T19:40:37.323-04:00",
      "last_modified": "2024-08-29T19:40:37.631-04:00",
      "init_point": "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_id=3fc2c62d40cd43cca37799ebcb4eb234",
      "preapproval_plan_id": "2c938084915406ae01916194d0a806ff",
      "auto_recurring": {
          "frequency": 1,
          "frequency_type": "months",
          "transaction_amount": 125,
          "currency_id": "BRL",
          "start_date": "2024-08-29T19:40:37.324-04:00",
          "end_date": "2025-02-28T19:40:37.324-04:00",
          "billing_day_proportional": false,
          "has_billing_day": false,
          "free_trial": null
      },
      "summarized": {
          "quotas": 5,
          "charged_quantity": null,
          "pending_charge_quantity": 5,
          "charged_amount": null,
          "pending_charge_amount": 625,
          "semaphore": null,
          "last_charged_date": null,
          "last_charged_amount": null
      },
      "next_payment_date": "2024-08-29T19:40:37.000-04:00",
      "payment_method_id": "master",
      "card_id": "9467992822",
      "payment_method_id_secondary": null,
      "first_invoice_offset": null,
      "subscription_id": "3fc2c62d40cd43cca37799ebcb4eb234"
  }
    return { status: 200, data: dataMock };
  } catch (error) {
    return { status: 500, data: { message: error.message } };
  }
};


module.exports = {
  processPayment,
}