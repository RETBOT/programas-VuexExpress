const Usuario = require('../models/Users');

const recurso_usuario = new Usuario({
	nombre: 'Mundo',
	email: 'elmundo@email.com',
	telefono: '872-117-3064'
});

module.exports.controller = (app) => {
    
    // Obtener páginas de usuarios
    app.get('/prueba1',(req,res) => {
    	recurso_usuario.save((error) => {
		if(error){
			console.log(error);
			res.send(error);
		}
		else 
			res.send({
			success: true,
			code: 200,
			msg: 'Usuario agregado!'
		});
	   });
    });

	app.get('/prueba2', (req, res) => {
		Usuario.find({}, 'nombre email', function(error, usuarios) {
		if(error) { 
			console.error(error);
		}
		else
			res.send({
				usuarios: usuarios
			});
	  	});
  	});

	app.get('/prueba3',(req, res) => {
		Usuario.findById('63373c5552a259c6f6b51a61', 'nombre email', function(error, usuario){
		if(error) { console.error(error) }
			res.send(usuario);
		});
	});

	app.get('/prueba4',(req,res) => {
		Usuario.findById('63373c5552a259c6f6b51a61', 'nombre email', 
			function(error, usuario){
				if(error) {
					console.error(error);
				}
				
				usuario.nombre = 'Vicente';
				usuario.email = 'elChenteB3llakcytoF10w@email.com'
				
				usuario.save(function (error){
				if(error) {console.log(error);}
					res.send({
						usuario: usuario
					});
				});
		});
	});

	app.get('/prueba5',(req,res) => {
		Usuario.findOneAndUpdate({nombre: 'Vicente'}, {$set: {nombre: 'Ruperta'}},
		function(err, usuario){
			if(err){
				console.log(err);
			}
			res.send(usuario);
		});
	});

	app.get('/prueba6',(req,res) => {
		// poner identificador
		Usuario.findByIdAndUpdate('63373c5552a259c6f6b51a61',{$set: {nombre: 'Ronaldiño'}}, 
			function(error, usuario){
				if(error){ console.err(error);}
			res.send(usuario);
		});
	});

	app.get('/prueba7',(req,res) => {
		Usuario.remove({
			_id: '63373c5552a259c6f6b51a61'
		}, function(error){
			res.send(error);

			res.send({
				usuario,
				estado: 'Eliminado'
			});
		});
	});

	app.get('/prueba8',(req,res) => {
		Usuarios.findOneAndRemove({_id: '63373c5552a259c6f6b51a61'}, function(error, usuario){
			if(error) res.send(error);
			res.send({
				estado:'Eliminado',
				usuario: usuario
			});
		});
	});

	app.get('/prueba9',(req,res) => {
		Usuario.findByIdAndRemove('63373c5552a259c6f6b51a61', function(error, usuario){
			if(error) res.send(error);
			res.send({
				estado: 'Eliminado',
				usuario: usuario
			});
		});
	}); 
}