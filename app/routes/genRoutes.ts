 var express = require('express').Router(),
  router = express.Router(),
  authController = require('../controllers/authController');

  /* GET home page. */
  router.get('/', function(req: any, res: any, next: any) {
      res.render('index', { title: 'Express' });
  });

  router.post('/auth/login', authController.login);

module.exports = router;
