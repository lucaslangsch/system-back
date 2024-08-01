const mercadopago = require('mercadopago')
const express = require('express');
const userDB = require('../db/usersDB');


const router = express.Router();
const client = new mercadopago.MercadoPagoConfig({ accessToken: 'APP_USR-879614550147882-073014-fb9ab524901da795736e328ca2610c59-1924574034' });

router.get('/', async (req, res) => {
  try {
    const [result] = await userDB.show();
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/create', async (req, res) => {
  try {
    const result = await userDB.createTable();
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.post('/createUser', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await userDB.createUser(name, email, password);
    res.status(200).json({status: "sucesso", data: name})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [result] = await userDB.loginUser(email, password);
    if (result.length < 1) {
      throw new Error()
    }
    res.status(200).json({status: "sucesso", data: result[0]});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'email ou senha inválido' });
  }
})

router.post('/mp', async (req, res) => {
  const { body } = req;
  const transactionAmount = body.transaction_amount
  console.log(body)
  const { payer } = body;

  const payment = new mercadopago.Payment(client);

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
})






module.exports = router;