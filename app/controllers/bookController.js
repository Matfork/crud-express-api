Book = require('../models/').Book;

class bookController {
  //Get a list of all book using model.findAll()
  // static index() {
  //   console.log('fuck!: ');
  //   console.log(Book);
  //   return Book.findAll()
  //     .then(function (books) {
  //       return {code: 200,data: books}
  //     })
  //     .catch(function (error) {
  //       return {code: 500,data: error}
  //     });
  // },

  //Get a list of all book using model.findAll()
  static index(req, res) {
    return Book.findAll()
      .then(function (books) {
        res.status(200).json({code: 200,data: books})
      })
      .catch(function (error) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Get an book by the unique ID using model.findById()
  static  show(req, res) {
    Book.findById(req.params.id, {
      include: Author
    })
    .then(function (book) {
      res.status(200).json({code: 200,data: book});
    })
    .catch(function (error){
      res.status(500).json({code: 500,error: book});
    });
  }

  //Create a new book using model.create()
  static create(req, res) {
    Book.create(req.body)
      .then(function (newBook) {
        res.status(200).json({code: 200,data: newBook});
      })
      .catch(function (error){
        res.status(500).json({code: 500,error: error});
      });
  }

  //Edit an existing book details using model.update()
  static update(req, res) {
    Book.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json({code: 200,data: updatedRecords});
    })
    .catch(function (error){
      res.status(500).json({code: 500,error: error});
    });
  }

  //Delete an existing book by the unique ID using model.destroy()
  static delete(req, res) {
    Book.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json({code: 200,data: deletedRecords});
    })
    .catch(function (error){
      res.status(500).json({code: 500,error: error});
    });
  }
};

module.exports = bookController;
