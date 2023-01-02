var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');
var fs = require('file-system');
var app = express();

// conectar a mongo
/*mongoose.connect('mongodb://127.0.0.1:27017/express_ad2022',function(){
 
  console.log('Conexion a la base de datos realizada')})
  
  .catch(err => {
      console.error('Error iniciando aplicacion: ',err.stack);
      process.exit(1);
});*/
mongoose.connect('mongodb://127.0.0.1:27017/express_app2022',{
//  useMongoClient: true
});
var db = mongoose.connection;
db.on("error",console.error.bind(console,"error de conexion con la base de datos"));
db.once("open",function(callback){
  console.log("Conexion exitosa a la base de datos");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Incluir controladores 
fs.readdirSync('controllers').forEach(function (arch){
  //  console.log(arch.substr(-3));
 if(arch.substr(-3) == '.js') {
  const route = require('./controllers/'+arch);
  route.controller(app);
 }
});

// Requerir modulo de sistema de archivos
//var fs = require('file-system');
//const { arch } = require('os');


//var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// para generar un servidor con la aplicacion, para verla dentro del navegador
app.listen(3000, function(){ console.log('escuchando el puerto 3000'); });

module.exports = app;
