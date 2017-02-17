 var express = require('express'),
  authorController = require('../controllers/authorController'),
  bookController = require('../controllers/bookController'),
  userController = require('../controllers/userController'),
  authMiddleware = require('../middleware/auth'),
  rAuthor = express.Router(),
  rBook = express.Router(),
  rUser = express.Router();

  module.exports.addRoutes = function(app: any){

    //Adding Middlewares for each router (This must be first step always before routing)
      rAuthor = authMiddleware.addMiddlewares(rAuthor, ['*']);
      rBook = authMiddleware.addMiddlewares(rBook, ['*']);
      rUser = authMiddleware.addMiddlewares(rUser, ['*']);

    //Setting Routers
      //When router works as a controller?? Relax, it is just a test
      // router.get('/', (req, res) => {
      //     bookController.index().then(function(result){
      //       res.status(result.code).json(result.data);
      //     });
      // });

      rAuthor
        .get('/', authorController.index)
        .get('/:id', authorController.show)
        .post('/', authorController.create)
        .put('/:id', authorController.update)
        .delete('/:id', authorController.delete);

      rBook
        .get('/', bookController.index)
        .get('/:id', bookController.show)
        .post('/', bookController.create)
        .put('/:id', bookController.update)
        .delete('/:id', bookController.delete);

      rUser
        .get('/', userController.index)
        .get('/:id', userController.show)
        .post('/', userController.create)
        .put('/:id', userController.update)
        .delete('/:id', userController.delete);

    //Exporting routers
      app.use('/api/author', rAuthor);
      app.use('/api/book', rBook);
      app.use('/api/user', rUser);

      return app;
  }
