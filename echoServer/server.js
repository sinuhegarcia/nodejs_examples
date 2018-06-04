/**
* Ejemplo de creación de Sockets con Node JS
* Se debe instalar express y socket.io
* npm --save socket.io
* npm --save express 
*/
var http = require('http')
var express = require('express')
var socketio = require('socket.io')
var app = express(server)
var server = http.Server(app)
var io = socketio(server)

app.get('/', function(req, res){
	//La dirección absoluta del directorio donde se encuentra los archivos.
	var _fileDir = '/Users/Admin/Documents/CodigoFacilito-NodeJS/echoServer/pages';
	//Se envía el archivo al cliente.
	res.sendFile(_fileDir+'/index.html')
});

io.on('connection',function(socket){
	socket.on('echo',function(data){
		//Recibe datos del cliente.
		console.log('[client]'+data)
		//Responde al cliente.
		socket.emit('echo','[server]'+data);
	})
})

//Inicia el servidor.
server.listen(8080);