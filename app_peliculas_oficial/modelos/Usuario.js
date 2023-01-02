const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Esquema = mongoose.Schema;
const EsquemaUsuario = new Esquema({
  nombre: String,
  email: String,
  contrasenha: String,
  idExterno: String,
});

const Usuario = mongoose.model('Usuario', EsquemaUsuario);
module.exports = Usuario;

module.exports.crearUsuario = (nuevoUsuario, callback) => {
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(nuevoUsuario.contrasenha, salt, (error, hash) => {
      // almacenar la contraseña encriptada
      const recursoNuevoUsuario = nuevoUsuario;
      recursoNuevoUsuario.contrasenha = hash;
      recursoNuevoUsuario.save(callback);
    });
  });
};

module.exports.obtenerUsuarioporEmail = (email, callback) => {
  const consulta = { email };
  Usuario.findOne(consulta, callback);
};

module.exports.compararContrasenhas = (contrasenhaCandidato, hash, callback) => {
  bcryptjs.compare(contrasenhaCandidato, hash, (err, coinciden) => {
    if (err) throw err;
    else callback(null, coinciden);
  });
};