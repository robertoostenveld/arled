var express = require('express')

var app = express();
var PORT = 3000;

var UNIVERSE = 1;
var OFFSET = 0;
var options = {
    host: '192.168.1.142',
    sendAll: true
  }

var artnet = require('artnet')(options);

app.use(express.static('public'))

app.listen(PORT, function () {
  console.log('Listening on port '+PORT);
})

// universes start counting at 0, channels start counting at 1
artnet.set(UNIVERSE, OFFSET+1, [64, 128, 10, 128]);
