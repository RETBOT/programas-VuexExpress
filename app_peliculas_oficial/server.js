// <!-- by: RET BOT  -->
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const sesion = require('express-session');
const config = require('./config/Config');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'apppeliculasofficialfullstack1';

const app = express();
const router = express.Router();
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// <!-- by: RET BOT  -->
app.use(sesion({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: false },
}));
app.use(passport.initialize());
app.use(passport.session());

// conectar con mongodb
mongoose.connect(config.DB, function() {
  console.log('Conexión hecha a la base de datos');
})
  .catch(err => {
    console.error('Error iniciando aplicación: ', err.stack);
    process.exit(1);
  });
// <!-- by: RET BOT  -->
  // incluir controladores
  fs.readdirSync('../controladores').forEach(function (archivo) {
    if (archivo.substr(-3) == ".js") {
      const ruta = require("./controladores/" + archivo);
      ruta.controller(app);
    }
  });
  app.use(history());
  app.use(serveStatic(__dirname + '/dist'));

  router.get('/usuario_actual', inicioSesion, function(req, res) {
    if (req.usuario) {
      res.send({ usuario_actual: req.usuario });
    } else {
      res.status(403).send({ success: false, msg: 'No autorizado' });
    }
  });
// <!-- by: RET BOT  -->
  function inicioSesion(req, res, next) {
    if (req.isAuthenticated())
      return next();
    else {
      res.redirect('/');
      console.log('¡Error! autenticación fallida');
    }
  }
// <!-- by: RET BOT  -->
  router.get('/logout', function(req, res) {
    req.logout();
    res.send();
  });

  router.get('/', function(req, res) {
    res.json({ mensaje: '¡API Inicializada!' });
  });

  const puerto = process.env.API_PORT || 8081;
  app.use('/', router);
  var server = app.listen(puerto, function() {
    console.log(`api corriendo en http://localhost:${puerto}`);
  });


  module.exports = server;
// <!-- by: RET BOT  -->
