const buildPlanModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plans', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    modality: DataTypes.ENUM('online', 'presencial'),
    frequency: DataTypes.ENUM('anual', 'semestral', 'trimestral', 'mensal'),
    type: DataTypes.STRING(45),
    value: DataTypes.INTEGER(),
  }, {
    tableName: 'plans',
    timestamps: false,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Signatures,
      { foreignKey: 'planId', as: 'signatures' });
  };

  return Plan;
}

module.exports = buildPlanModel;
