const mongoose = require('mongoose');
// <!-- by: R3T B0T  -->
const Esquema = mongoose.Schema;
const EsquemaPelicula = new Esquema({
  nombre: String,
  descripcion: String,
  anho_pub: Number,
  genero: String
});

const Pelicula = mongoose.model('Pelicula', EsquemaPelicula);
module.exports = Pelicula;// <!-- by: R3T B0T  -->
