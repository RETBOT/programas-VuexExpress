const mongoose = require('mongoose');

const Esquema = mongoose.Schema;
const EsquemaUsuario = new Esquema({ 
	nombre: { type: String, required: true},
	email: String,
	telefono: {
		type: String, 
		validate: {
			validator: function(v){
				return /\d{3}-\d{3}-\d{4}/.test(v);
			},
			message: '{VALUE} no es un numero de telefono válido!'
		},
		required: [true, 'Error, se requiere el número de telefono']
	}
});

const Usuario = mongoose.model("Usuario", EsquemaUsuario);
module.exports = Usuario;

