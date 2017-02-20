var User = require('../models/').User;
var jwt  = require('jsonwebtoken')

var authController = class {

  //Authenticate user and generate token
  public static login( req : any, res: any) {

    let params = {
      email: req.body.email,
      password : req.body.password
    };

    User.find({
      where: params
    })
    .then(function (data: any){

      if(data !== null)
      {
          try{
            //var token = jwt.sign({data: params}, process.env.JWT_SECRET_KEY,{expiresIn :  '10m'});
            var token = jwt.sign({data: {email: params.email}}, process.env.JWT_SECRET_KEY,{expiresIn :  '5s'});
            res.status(200).json({code: 200,data: token});
          }catch(err){
            res.status(500).json({code: 500,error: err.toString()});
          }
      }else{
        res.status(200).json({code: 401,data: data || 'Not Found'});
      }
    })
    .catch(function (error: any) {
        res.status(500).json({code: 500,error: error});
    });
  }

  //Verify Token is still valid | Used in middleware
  public static verifyToken( token : string) : any {
      // verifies secret and checks exp
      var result : {};

      try{
        var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        result = { code: 200, message: 'Token authorized.', data : decoded };
        console.log('Token is still Valid');
      }catch(err){
        result = { code: 401, message: 'Failed to authenticate token.', error : err };
      }

      return result;
  }
};

module.exports = authController;
