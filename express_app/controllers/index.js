module.exports.controller = (app) => {
    // Obtener paginas de inicio 
    app.get('/', (req, res) => {
        res.render('index', {title: 'Mi primera app con controlador '})
    });
}// <!-- by: RET BOT  -->
