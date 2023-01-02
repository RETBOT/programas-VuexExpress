const Usuario = require('../models/Users');

module.exports.controller = (app) => {
    // Obtener todos los usuarios 
    app.get('/users',(req,res) => {
        // res.render('users',{title: 'Página de Usuarios', descripcion: 'Esta es la descripcion para todos los usuarios' })
        Usuario.find({}, 'nombre email', function(error, usuarios){
            if(error){ console.log(error);}
            else {res.send(usuarios);}
        });
    });

    // Obtener detalles de un solo usuario
       // Obtener detalles de usuario
    app.get('/users/:id',(req,res) =>{
        Usuarios.findById(req.params.id, 'nombre email telefono', function(error,usuario){
            if(error){
                console.log(error); 
                res.send(error);
            }
            else{
                res.send(usuario);
            }
        })
    });

    // Agregar un nuevo usuario
    app.post('/users',(req,res)=>{
        const usuario = new Usuarios({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        });
        usuario.save(function (error,usuario){
            if(error){
                console.error(error);
                res.send(error);
            } else{
                res.send(usuario);
            }
        });
    });

    // Actualizar un usuario
    app.put('/users/:id',(req,res)=>{
        Usuarios.findById(req.params.id, 'nombre email telefono',
            function(error,usuario){
                if(error){
                    console.error(error);
                    res.send(error);
                }else{
                    usuario.nombre = req.body.nombre;
                    usuario.email = req.body.email;
                    usuario.telefono = req.body.telefono;
                    usuario.save(function(error,usuario){
                        if(error){
                            console.error(error);
                            res.send(error);
                        } else res.send(usuario);
                    });
                }
            });
    });

    // Eliminar un usuario
    app.delete('/users/:id',(req,res)=>{
        Usuarios.remove({
            _id: req.params.id
        }, function(error,usuario){
            if(error){
                console.error(error);
                res.send(error);
            } else res.send(usuario);
        });
    });
}
