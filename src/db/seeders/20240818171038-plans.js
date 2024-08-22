'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plans', [
      {
        id: "2c93808491540663019161927c2d0736",
        modality: "presencial",
        frequency: "mensal",
        type: "uma modalidade",
        value: 175,
      },
      {
        id: "2c93808491540663019161945bf70737",
        modality: "presencial",
        frequency: "trimestral",
        type: "uma modalidade",
        value: 445,
      },
      {
        id: "2c938084915406ae01916194d0a806ff",
        modality: "presencial",
        frequency: "semestral",
        type: "uma modalidade",
        value: 125,
      },
      {
        id: "2c938084915406c20191619532990708",
        modality: "presencial",
        frequency: "anual",
        type: "uma modalidade",
        value: 98,
      },
      {
        id: "2c938084915406c201916196ce530709",
        modality: "online",
        frequency: "mensal",
        type: "uma modalidade",
        value: 155,
      },
      {
        id: "2c938084915406ae0191619676b70701",
        modality: "online",
        frequency: "trimestral",
        type: "uma modalidade",
        value: 385,
      },
      {
        id: "2c938084915406ae0191619600090700",
        modality: "online",
        frequency: "semestral",
        type: "uma modalidade",
        value: 110,
      },
      {
        id: "2c9380849154066301916195bd420738",
        modality: "online",
        frequency: "anual",
        type: "uma modalidade",
        value: 85,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plans', null, {});
  }
};