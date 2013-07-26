var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var buf = new Buffer(fs.readFileSync(index.html));
var str = buf.toString('utf8',0,buf.length);

response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
