const mongoose =require('mongoose');// <!-- by: R3T B0T  -->
const Esquema = mongoose.Schema;
const EsquemaCalificacion = new Esquema({
  pelicula_id: String,
  usuario_id: String,
  calificacion: Number,
});
// <!-- by: R3T B0T  -->
const Calificacion = mongoose.model("Calificacion", EsquemaCalificacion);
module.exports = Calificacion;
