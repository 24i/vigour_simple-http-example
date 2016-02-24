'use strict'

var http = require('http')
var REQ

module.exports = {
  port: {
    on: {
      data: createServer
    }
  },
  ip: {
    on: {
      data: createServer
    }
  }
}

function createServer () {
  var service = this.parent

  if (service.server) {
    // console.log('the service already has a server!')
    // console.log('maybe change its properties or replace it!')
    return
  }

  var ip = service.ip && service.ip.val
  var port = service.port && service.port.val

  if (ip && port) {
    console.log('craeteServer!')
    let server = service.server = http.createServer()

    server.on('request', function (req, res) {
      if (req.method !== 'OPTIONS') {
        console.log('got a request!')
      }
      res.writeHead(200)
      res.write('this is simple-http-example with id ' + service.id.val)
      res.end()
    })

    server.on('error', function (err) {
      console.log('server error', err)
    })

    server.listen(port, ip)

    console.log('Server running at http://%s:%s', ip, port)
  }
}

