  module.exports.addRoutes = function(app : any){
    // catch 404 and forward to error handler
    app.use(function(req: any, res: any, next: any) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handler
    app.use(function(err: any, req: any, res: any, next: any) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    return app;
}
