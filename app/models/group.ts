'use strict';

module.exports = function(sequelize: any, DataTypes: any) {
  var Group = sequelize.define('Group', {
    group: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'group',
    timestamps: false
  });
  return Group;
};
