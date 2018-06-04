var http = require("http");
var manejador = function(solicitud, respuesta){
	console.log("Petición Recibida");
	respuesta.end("<h1>Hola Mundo</h1>")
}

var servidor = http.createServer(manejador);
servidor.listen(8080);