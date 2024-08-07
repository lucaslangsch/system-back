const buildUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    purhcase: DataTypes.DATE,
    expiresIn: DataTypes.DATE,
    planId: DataTypes. INTEGER,
  }, {
    tableName: 'users',
    timestamps: false,
  });
  
  User.associate = (models) => {
    User.belongsTo(models.Plans,
      { foreignKey: 'planId', as: 'plan' });
    };

  return User;
}

module.exports = buildUserModel;
