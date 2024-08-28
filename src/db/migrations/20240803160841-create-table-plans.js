'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plans', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      mercado_pago_id: {
        type: Sequelize.STRING,
      },
      metodology: {
        type: Sequelize.ENUM('online', 'presencial'),
        allowNull: false,
      },
      frequency: {
        type: Sequelize.ENUM('anual', 'semestral', 'trimestral', 'mensal'),
        allowNull: false,
      },
      modality: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      recurrence: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      // payment_types: {
      //   type: Sequelize.JSON,
      //   allowNull: false,
      // },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plans');
  }
};
