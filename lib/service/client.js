'use strict'

var net = require('net')

module.exports = function (port, host) {
  console.log('tcp connect to', port, host)
  var client = net.connect({port, host}, function() { //'connect' listener
    console.log('client connected');
    setInterval(function () {
      client.write(message())
    }, 500)
    client.on('data', function (data) {
      console.log('got response!', data.toString())
    })
    client.on('error', function (err) {
      console.log('===== TCP CLIENT ERROR =====\n', err)
      process.exit()
    })
  })
  return client
}

var messages = ['hey!', 'ha!', 'waddap!']

function message () {
  return messages[Math.floor(Math.random()*messages.length)] + ' from:' + id
}
