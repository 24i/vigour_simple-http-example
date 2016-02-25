var config = require('../lib/config')
var net = require('net');

var port = config.otherguy.port
  ? config.otherguy.port.val
  : config.otherguy.val
var host = config.otherguy.host
  ? config.otherguy.host.val
  : '127.0.0.1'

var id = config.id.val
var client = net.connect({port, host}, function() { //'connect' listener
  console.log('client connected');
  setInterval(function () {
    client.write(message())
  }, 500)
  client.on('data', function (data) {
    console.log('got response!', data.toString())
  })
});

var messages = ['hey!', 'ha!', 'waddap!']

function message () {
  return messages[Math.floor(Math.random()*messages.length)] + ' from:' + id
}