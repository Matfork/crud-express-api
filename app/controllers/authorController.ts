var Author = require('../models/').Author;
var Book = require('../models/').Book;
var sq = require('sequelize');

var authorController = class {
  //Get a list of all authors using model.findAll()
  public static index( req : any, res: any) {
    Author.findAll({
      order: [['id', 'ASC']],
      include: Book
    })
      .then(function (authors: any) {
        res.status(200).json({code: 200,data: authors})
      })
      .catch(function (error: any) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Get an author by the unique ID using model.findById()
  public static show(req : any, res: any) {
    Author.findById(req.params.id, {
      include: Book
    })
    .then(function (author: any) {
      res.status(200).json({code: 200,data: author})
    })
    .catch(function (error: any) {
      res.status(500).json({code: 500,error: error})
    });
  }

  //Create a new author using model.create()
  public static create(req: any, res: any) {
    Author.create(req.body)
      .then(function (newAuthor: any) {
        res.status(200).json({code: 200,data: newAuthor})
      })
      .catch(function (error: any) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Edit an existing author details using model.update()
  public static update(req: any, res: any) {
    Author.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords: any) {
      res.status(200).json({code: 200,data: updatedRecords})
    })
    .catch(function (error: any) {
      res.status(500).json({code: 500,error: error})
    });
  }

  //Delete an existing author by the unique ID using model.destroy()
  public static delete(req: any, res: any) {
    Author.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords: any) {
      res.status(200).json({code: 200,data: deletedRecords})
    })
    .catch(function (error: any) {
      res.status(500).json({code: 500,error: error})
    });
  }

  //Get all authors for select drop down
  public static getAllMap(req: any, res: any) {
    Author.findAll({
      attributes: ['id', [sq.fn('concat', sq.col('first_name'),' ',sq.col('last_name')), 'full_name']],
      order: [['id', 'ASC']]
    })
    .then(function (author: any) {
      res.status(200).json({code: 200,data: author})
    })
    .catch(function (error: any) {
      res.status(500).json({code: 500,error: error})
    });
  }
};

module.exports = authorController;
