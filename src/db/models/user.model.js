const buildUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    tableName: 'users',
    timestamps: false,
  });

  return User;
}

module.exports = buildUserModel;
