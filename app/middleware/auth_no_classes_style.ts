// // get an instance of the router for api routes
// var middleWares = express.Router();
// var authController = require('../controllers/authController');
//
// var authM = {
//   verifyToken: function(req : any, res: any, next: any) {
//       let token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//       var result : {code : number, error? : any,data? : any};
//       result = authController.verifyToken(token);
//
//       if(result.error){
//         res.status(result.code).json(result);
//       }else if(result.data){
//         res.decoded = result.data;
//         next();
//       }else{
//         res.status(500).json({code: 500, error: 'Unexpected Error on server'});
//       }
//   },
//   generateToken: function(req : any, res: any, next: any) {
//       console.log('Everything looks good');
//       next();
//   },
// }
//
// module.exports = authM;
//
// // apply the routes to our application with the prefix /api
// middleWares.use('/api', middleWares);
