const buildSignatureModel = (sequelize, DataTypes) => {
  const Signature = sequelize.define('Signatures', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    active: DataTypes.BOOLEAN,
    purchase: DataTypes.DATE,
    expiresIn: DataTypes.DATE,
  }, {
    tableName: 'signatures',
    timestamps: false,
  });
  
  Signature.associate = (models) => {
    Signature.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
    Signature.belongsTo(models.Plans, {
      foreignKey: 'planId',
      as: 'plan',
    });
  };

  return Signature;
}

module.exports = buildSignatureModel;
