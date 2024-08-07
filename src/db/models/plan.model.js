const buildPlanModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plans', {
    name: DataTypes.STRING,
  }, {
    tableName: 'plans',
    timestamps: false,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Users,
      { foreignKey: 'planId', as: 'users' });
  };

  return Plan;
}

module.exports = buildPlanModel;
