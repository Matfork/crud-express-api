// get an instance of the router for api routes
var express     = require('express'),
    middleWares = express.Router(),
    BaseMiddleware = require('./baseMiddleware'),
    authController = require('../controllers/authController');

var authM = class AuthMiddlware extends BaseMiddleware{

    constructor() {
       super();
   }

   //Add your middlewares logic here
    __verifyToken(req : any, res: any, next: any) {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        var result : {code : number, error? : any,data? : any};
        result = authController.verifyToken(token);

        if(result.error){
          res.status(result.code).json(result);
        }else if(result.data){
          res.decoded = result.data;
          next();
        }else{
          res.status(500).json({code: 500, error: 'Unexpected Error on server'});
        }
    }

    __generateToken (req : any, res: any, next: any) {
        console.log('Everything looks good');
        next();
    }

  //End of your middlewares logic
}

module.exports = new authM();
