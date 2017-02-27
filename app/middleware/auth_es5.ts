// get an instance of the router for api routes
var authController = require('../controllers/authController');

var authM = {
  //Add your middlewares logic here
   __verifyToken(req : any, res: any, next: any) {
       let token = req.body  && req.body.token  ? req.body.token  : undefined ||
                   req.query && req.query.token ? req.query.token : undefined ||
                   (req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : '');

       let result : {code : number, error? : any,data? : any};
       result = authController.verifyToken(token);

       if(result.error){
         res.status(result.code).json(result);
       }else if(result.data){
         res.decoded = result.data;

         (req.headers['verifyonly'])
           ? res.status(200).json({code: 200, data: result.data})
           : next();
       }else{
         res.status(500).json({code: 500, error: 'Unexpected Error on server'});
       }
   },
   __generateToken (req : any, res: any, next: any) {
       console.log('Everything looks good');
       next();
   },
}

module.exports = authM;
