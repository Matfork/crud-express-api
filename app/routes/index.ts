 var express = require('express'),
  router = express.Router(),
  authorController = require('../controllers/authorController'),
  bookController = require('../controllers/bookController');

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {
    res.render('index', { title: 'Express' });
});

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

module.exports = router;
