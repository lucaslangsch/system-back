const buildPlanModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plans', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mercado_pago_id: {
      type: DataTypes.STRING,
    },
    metodology: {
      type: DataTypes.ENUM('online', 'presencial'),
    },
    frequency: {
      type: DataTypes.ENUM('anual', 'semestral', 'trimestral', 'mensal'),
    },
    modality: {
      type: DataTypes.STRING(45),
    },
    value: {
      type: DataTypes.INTEGER,
    },
    recurrence: {
      type: DataTypes.BOOLEAN,
    },
    // payment_types: {
    //   type: DataTypes.JSON,
    // },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'plans',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });


  Plan.associate = (models) => {
    Plan.hasMany(models.Signatures,
      { foreignKey: 'planId', as: 'signatures' });
  };

  return Plan;
}

module.exports = buildPlanModel;
