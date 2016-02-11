#!/bin/node
'use strict'

var http = require('http')
var server = http.createServer()

var Config = require('vigour-config')
var config = new Config()

var ip = config.ip.val
var port = config.port.val

server.on('request', function (req, res) {
  console.log('got a request!')
  res.writeHead(200)
  res.end()
})

server.on('error', function (err) {
  console.log('server error!\n', err)
})

server.listen(port, ip)

console.log('------------------ simple service!')
console.log('config:\n', config.plain())
console.log('Server running at http://%s:%s', ip, port)

console.log('------------------ simple service!')
