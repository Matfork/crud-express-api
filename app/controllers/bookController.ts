var Author = require('../models/').Author;
var Book = require('../models/').Book;

var bookController =  class {
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
  public static index(req: any, res: any) {
    return Book.findAll({
        order: [['id', 'ASC']],      
        include: Author
    })
      .then(function (books: any) {
        res.status(200).json({code: 200,data: books})
      })
      .catch(function (error: any) {
        res.status(500).json({code: 500,error: error})
      });
  }

  //Get an book by the unique ID using model.findById()
  public static  show(req: any, res: any) {
    Book.findById(req.params.id, {
      include: Author
    })
    .then(function (book: any) {
      res.status(200).json({code: 200,data: book});
    })
    .catch(function (error: any){
      res.status(500).json({code: 500,error: error});
    });
  }

  //Create a new book using model.create()
  public static create(req: any, res: any) {
    Book.create(req.body)
      .then(function (newBook: any) {
        res.status(200).json({code: 200,data: newBook});
      })
      .catch(function (error: any){
        res.status(500).json({code: 500,error: error});
      });
  }

  //Edit an existing book details using model.update()
  public static update(req: any, res: any) {
    Book.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords: any) {
      res.status(200).json({code: 200,data: updatedRecords});
    })
    .catch(function (error: any){
      res.status(500).json({code: 500,error: error});
    });
  }

  //Delete an existing book by the unique ID using model.destroy()
  public static delete(req: any, res: any) {
    Book.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords: any) {
      res.status(200).json({code: 200,data: deletedRecords});
    })
    .catch(function (error: any){
      res.status(500).json({code: 500,error: error});
    });
  }
};

module.exports = bookController;
