var http = require("http"),
  url = require("url"),
  util = require('util'),
  formidable = require("formidable");
/*
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.write('hello word !');
  response.end();
}).listen(8088);*/

function start(route, handle) {
  /*function onRequest(request, response) {
    /!*var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // response.writeHead(200, {"Content-Type": "text/plain"});
    route(handle, pathname, response);
    // response.write(content);
    // response.end();*!/
    // var postData = "";
    var pathname = url.parse(request.url).pathname;
   console.log("Request for " + pathname + " received.");

    // request.setEncoding("utf8");

    /!*request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
        postDataChunk + "'.");
    });*!/
    request.addListener("end", function() {
      route(handle, pathname, response, request);
    });

   /!* if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
      var form = formidable.IncomingForm();
      form.parse(request,function (err, fields, files) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('received upload:\n\n');
        response.end(util.inspect({fields: fields, files: files}));
      });
      return;
    }
    //show form upload form
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(
      '<form action="/upload" enctype="multipart/form-data" '+
      'method="post">'+
      '<input type="text" name="title"><br>'+
      '<input type="file" name="upload" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );*!/

  }*/
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
