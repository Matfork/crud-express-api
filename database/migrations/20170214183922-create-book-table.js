'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('book', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      publication_date: {
        type: Sequelize.DATE
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: { model: 'author', key: 'id' }
      },
      created_at: {
         allowNull: false,
         type: Sequelize.DATE
       },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('book');
  }
};
