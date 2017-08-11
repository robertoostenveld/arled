var express = require('express')
var bodyParser = require('body-parser')
var request = require('request');
var path    = require("path");

var PORT = 3011;
var UNIVERSE = 1;
var OFFSET = 0;
var HOST = '192.168.1.134';

var artnet = require('artnet')({
  host: HOST,
  sendAll: true
});

var app = express();
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

function setMode(mode) {
  var url = 'http://' + HOST + '/json?mode=' + mode;
  console.log(url);
  request.post(url,
    function(err, res, body) {
      // `body` is a js object if request was successful
      console.log('request error:', err); // Print the error if one occurred
      console.log('request statusCode:', res && res.statusCode); // Print the response status code if a response was received
      console.log('request body:', body); // Print the HTML for the Google homepage.
  });
}

app.get('/mode0.html', function (req, res) {
  setMode(0);
  res.sendFile(path.join(__dirname+'/public/mode0.html'))
});
app.get('/mode1.html', function (req, res) {
  setMode(1);
  res.sendFile(path.join(__dirname+'/public/mode1.html'))
});
app.get('/mode2.html', function (req, res) {
  setMode(2);
  res.sendFile(path.join(__dirname+'/public/mode2.html'))
});
app.get('/mode3.html', function (req, res) {
  setMode(3);
  res.sendFile(path.join(__dirname+'/public/mode3.html'))
});
app.get('/mode4.html', function (req, res) {
  setMode(4);
  res.sendFile(path.join(__dirname+'/public/mode4.html'))
});
app.get('/mode5.html', function (req, res) {
  setMode(5);
  res.sendFile(path.join(__dirname+'/public/mode5.html'))
});
app.get('/mode6.html', function (req, res) {
  setMode(6);
  res.sendFile(path.join(__dirname+'/public/mode6.html'))
});
app.get('/mode7.html', function (req, res) {
  setMode(7);
  res.sendFile(path.join(__dirname+'/public/mode7.html'))
});
app.get('/mode8.html', function (req, res) {
  setMode(8);
  res.sendFile(path.join(__dirname+'/public/mode8.html'))
});
app.get('/mode9.html', function (req, res) {
  setMode(9);
  res.sendFile(path.join(__dirname+'/public/mode9.html'))
});
app.get('/mode10.html', function (req, res) {
  setMode(10);
  res.sendFile(path.join(__dirname+'/public/mode10.html'))
});
app.get('/mode11.html', function (req, res) {
  setMode(11);
  res.sendFile(path.join(__dirname+'/public/mode11.html'))
});
app.get('/mode12.html', function (req, res) {
  setMode(12);
  res.sendFile(path.join(__dirname+'/public/mode12.html'))
});

// all other static content is automatically served from public
app.use(express.static('public'))

// POST method route
app.post('/', function (req, res) {
  res.send(req.body);
  var value = []; // make an array, skip the element with index 0 for now
  if (('c1' in req.body))
    value[1] = req.body.c1;
  if (('c2' in req.body))
    value[2] = req.body.c2;
  if (('c3' in req.body))
    value[3] = req.body.c3;
  if (('c4' in req.body))
    value[4] = req.body.c4;
  if (('c5' in req.body))
    value[5] = req.body.c5;
  if (('c6' in req.body))
    value[6] = req.body.c6;
  if (('c7' in req.body))
    value[7] = req.body.c7;
  if (('c8' in req.body))
    value[8] = req.body.c8;
  if (('c9' in req.body))
    value[9] = req.body.c9;
  if (('c10' in req.body))
    value[10] = req.body.c10;
  if (('c11' in req.body))
    value[11] = req.body.c11;
  if (('c12' in req.body))
    value[12] = req.body.c12;
  value.splice(0, 1); // remove the element with index 0
  artnet.set(UNIVERSE, OFFSET+1, value); // Art-Net universes start counting at 0, channels start counting at 1
  console.log('Art-Net value = ' + value);
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
})
