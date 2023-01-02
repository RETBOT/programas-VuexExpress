const Usuario = require('../modelos/Usuario');
const passport = require('passport');
const config = require('./../config/Config');
const Estrategia = require('passport-facebook').Strategy;

module.exports.controller = (app) => {
  // Estrategia de facebook
  passport.use(new Estrategia({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: '/login/facebook/return',
    profileFields: ['id', 'displayName', 'email'],
  },
  (accessToken, refreshToken, perfil, callback) => {
    // Controlar login con facebook
    const email = perfil.emails[0].value;
    Usuario.obtenerUsuarioporEmail(email, (err, usuario) => {
      if (!usuario) {
        const nuevoUsuario = new Usuario({
          nombre: perfil.displayName,
          email: email,
          idExterno: perfil.id,
        });
        Usuario.crearUsuario(nuevoUsuario, (error) => {
          if (error) {
            // Manejar error
          } else {
            return callback(null, usuario);
          }
        });
      } else {
        return callback(null, usuario);
      }
      return true;
    });
  }));

  app.get('/login/facebook', passport.authenticate('facebook', { scope: [ 'email'] }));

  app.get('/login/facebook/return', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  });
};