Author = require('../models/').Author;
Book = require('../models/').Book;

class authorController {
  //Get a list of all authors using model.findAll()
  static index(req, res) {
    Author.findAll({
      include: Book
    })
      .then(function (authors) {
        res.status(200).json({code: 200,data: authors})
      })
      .catch(function (error) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Get an author by the unique ID using model.findById()
  static show(req, res) {
    Author.findById(req.params.id, {
      include: Book
    })
    .then(function (author) {
      res.status(200).json({code: 200,data: author})
    })
    .catch(function (error) {
      res.status(500).json({code: 500,error: error})
    });
  }

  //Create a new author using model.create()
  static create(req, res) {
    Author.create(req.body)
      .then(function (newAuthor) {
        res.status(200).json({code: 200,data: newAuthor})
      })
      .catch(function (error) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Edit an existing author details using model.update()
  static update(req, res) {
    Author.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json({code: 200,data: updatedRecords})
    })
    .catch(function (error) {
      res.status(500).json({code: 500,error: error})
    });
  }

  //Delete an existing author by the unique ID using model.destroy()
  static delete(req, res) {
    Author.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json({code: 200,data: deletedRecords})
    })
    .catch(function (error) {
      res.status(500).json({code: 500,error: error})
    });
  }
};

module.exports = authorController;
