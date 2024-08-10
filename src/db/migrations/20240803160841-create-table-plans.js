'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plans', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      modality: {
        type: Sequelize.ENUM('online', 'presencial'),
        allowNull: false,
      },
      frequency: {
        type: Sequelize.ENUM('anual', 'semestral', 'trimestral', 'mensal'),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plans');
  }
};
