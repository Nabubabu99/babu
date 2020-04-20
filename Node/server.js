// node "f:\Usuario no BORRAR\Escritorio\Programación\Github\babu\Node\index.js"
// var http = require("http");

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("Holos");
//     response.end();
// }).listen(8888);

var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida");

        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Holowo");
        response.end();
    };

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciado");
};

exports.iniciar = iniciar;
