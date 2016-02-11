#!/bin/node
'use strict'

var http = require('http')
var server = http.createServer()

var Config = require('vigour-config')
var config = new Config()

var ip = config.ip.val
var port = config.port.val

// --------------------------- setting up server

server.on('request', function (req, res) {
  res.writeHead(200)
  res.end()
})

server.on('error', function (sError) {
  console.log('COULD NOT BIND or / Bad REQ', 'ERROR: on adapator or call issue with socket')
})

server.listen(port, ip)

console.log('------------------ simple service!')
console.log('config:\n', config.plain())
console.log('Server running at http://%s:%s', ip, port)

console.log('------------------ simple service!')
