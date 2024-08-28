'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plans', [
      {
        metodology: "presencial",
        frequency: "mensal",
        modality: "uma modalidade",
        value: 175,
        recurrence: false,
      },
      {
        metodology: "presencial",
        frequency: "trimestral",
        modality: "uma modalidade",
        value: 445,
        recurrence: false,
      },
      {
        mercado_pago_id: "2c938084915406ae01916194d0a806ff",
        metodology: "presencial",
        frequency: "semestral",
        modality: "uma modalidade",
        value: 125,
        recurrence: true,
      },
      {
        mercado_pago_id: "2c938084915406c20191619532990708",
        metodology: "presencial",
        frequency: "anual",
        modality: "uma modalidade",
        value: 98,
        recurrence: true,
      },
      {
        metodology: "online",
        frequency: "mensal",
        modality: "uma modalidade",
        value: 155,
        recurrence: false,
      },
      {
        metodology: "online",
        frequency: "trimestral",
        modality: "uma modalidade",
        value: 385,
        recurrence: false,
      },
      {
        mercado_pago_id: "2c938084915406ae0191619600090700",
        metodology: "online",
        frequency: "semestral",
        modality: "uma modalidade",
        value: 110,
        recurrence: true,
      },
      {
        mercado_pago_id: "2c9380849154066301916195bd420738",
        metodology: "online",
        frequency: "anual",
        modality: "uma modalidade",
        value: 85,
        recurrence: true,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plans', null, {});
  }
};