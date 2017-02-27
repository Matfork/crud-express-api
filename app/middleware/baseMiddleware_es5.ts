module.exports = {
  addMiddlewares: function(router: any, middlewares : any, chosen : [string]) : any {
      if(chosen.indexOf('*').toString() !== '-1'){
        for (var key in middlewares) {
          router.use(middlewares[key]);
        }
      }else{
        for (var key in middlewares) {
          if(chosen.indexOf(key).toString() !== '-1'){
            router.use(middlewares[key]);
          }
        }
      }
      return router;
  }
};
