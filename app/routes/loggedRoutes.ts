 var express = require('express'),
  router = express.Router(),
  authorController = require('../controllers/authorController'),
  bookController = require('../controllers/bookController'),
  userController = require('../controllers/userController'),
  authController = require('../controllers/authController');

//When router works as a controller?? Relax, it is just a test
// router.get('/book', (req, res) => {
//     bookController.index().then(function(result){
//       res.status(result.code).json(result.data);
//     });
// });


router.get('/author', authorController.index);
router.get('/author/:id', authorController.show);
router.post('/author', authorController.create);
router.put('/author/:id', authorController.update);
router.delete('/author/:id', authorController.delete);

router.get('/book', bookController.index);
router.get('/book/:id', bookController.show);
router.post('/book', bookController.create);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.delete);

router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

router.post('/auth/login', authController.login);

module.exports = router;
