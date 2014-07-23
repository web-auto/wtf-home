var static = require('node-static');

var file = new static.Server('./');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response, function (e, res) {
        if (e) {
          var partials = (request.url.match(/(\/partials\/)/) || ['', ''])[1];
          console.log(partials);
          if (!partials) {
            console.log('found');
            file.serveFile('/index.html', 200, {}, request, response);
          } else {
            console.log('not found');
            file.serveFile('/not-found.html', 200, {}, request, response);
          }
        }
    });
  }).resume();
}).listen(8081);

console.log("running server..");