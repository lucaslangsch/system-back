const buildUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });
  
  User.associate = (models) => {
    User.hasMany(models.Signatures,
      { foreignKey: 'userId', as: 'signatures' });
    };

  return User;
}

module.exports = buildUserModel;
