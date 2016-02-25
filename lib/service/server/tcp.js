'use strict'

var net = require('net')

var server = module.exports = net.createServer(function (socket) {
  var id = this._vigour_id
  console.log('someone connected!')
  socket.on('data', function (data) {
    console.log('got a message!', data.toString())
    socket.write('i hear you! ' + id)
  })
})
