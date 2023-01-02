// # by: RETBOT 
const http = require('http')
http.createServer(function(req,res){
 res.writeHead(200, {'Content-Type' : 'text/html'});
res.end('<h1>Hola mundo\n</h1><center><h2>Adios Mundo :(</center>');

}).listen(8080, '127.0.0.1');

console.log('Servidor que se ejecuta en http:127.0.0.1.8080/');
// # by: RETBOT 
