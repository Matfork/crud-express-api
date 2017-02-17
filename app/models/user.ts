'use strict';

module.exports = function(sequelize: any, DataTypes: any) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    group_id: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'user',
    classMethods: {
      associate: function(models: any) {
        User.belongsTo(models.Group, {
          onDelete: 'CASCADE',
          hooks:true
        });
      }
    }
  });
  return User;
};
