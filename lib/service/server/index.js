'use strict'

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
    let mode = service.mode.val
    let server = service.server = require('./' + mode)
    server._vigour_id = service.id.val
    server.listen(port, ip)
    console.log(mode, 'server running at', ip, port)
  }
}

