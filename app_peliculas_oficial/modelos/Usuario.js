const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
// <!-- by: R3T B0T  -->
const Esquema = mongoose.Schema;
const EsquemaUsuario = new Esquema({
  nombre: String,
  email: String,
  contrasenha: String,
  idExterno: String,
});
// <!-- by: R3T B0T  -->
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
  });// <!-- by: R3T B0T  -->
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
