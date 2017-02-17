var User = require('../models/').User;

var authController = class {
  //Get a list of all users using model.findAll()
  public static login( req : any, res: any) {

    User.find({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(function (data: any) {
        res.status(200).json({code: 200,data: data || 'Not Found'})
      })
      .catch(function (error: any) {
        res.status(500).json({code: 500,error: error})
      });
  }
};

module.exports = authController;
