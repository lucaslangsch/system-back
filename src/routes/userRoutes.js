const route = require('express').Router();
const { authMiddleware } = require('../middlewares')
const { userController } = require('../controllers');

route.get('/show', authMiddleware, userController.showUsers);
route.post('/login', userController.login)
route.post('/register', userController.createUser);

module.exports = route;

// const client = new mercadopago.MercadoPagoConfig({ accessToken: 'APP_USR-879614550147882-073014-fb9ab524901da795736e328ca2610c59-1924574034' });

// router.post('/mp', async (req, res) => {
//   const { body } = req;
//   const transactionAmount = body.transaction_amount
//   console.log(body)
//   const { payer } = body;

//   const payment = new mercadopago.Payment(client);

  // const paymentData = {
  //   transaction_amount: Number(transactionAmount),
  //   token: body.token,
  //   description: body.description,
  //   installments: Number(body.installments),
  //   payment_method_id: body.paymentMethodId,
  //   issuer_id: body.issuerId,
  //   payer: {
  //     email: payer.email,
  //     identification: {
  //       type: payer.identification.docType,
  //       number: payer.identification.docNumber,
  //     },
  //   },
  // };
  // payment
  //   .create({ body: paymentData })
  //   .then(function (data) {
  //     res.status(201).json({
  //       detail: data.status_detail,
  //       status: data.status,
  //       id: data.id,
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     // const { errorMessage, errorStatus } = validateError(error);
  //     res.status(error.status).json({ error_message: error.message });
  //   });
// })