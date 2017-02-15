'use strict';

module.exports = function(sequelize: any, DataTypes: any) {
  var Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    publication_date: DataTypes.DATE,
    author_id: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'book',
    classMethods: {
      associate: function(models: any) {
        Book.belongsTo(models.Author,{
          onDelete: 'CASCADE',
          hooks:true
        });
      }
    }
  });
  return Book;
};
