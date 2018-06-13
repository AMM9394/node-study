var http = require("http");
var url = require("url");
/*
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.write('hello word !');
  response.end();
}).listen(8088);*/

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // response.writeHead(200, {"Content-Type": "text/plain"});
    route(handle, pathname, response);
    // response.write(content);
    // response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
