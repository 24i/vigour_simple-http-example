#!/bin/node
'use strict'

// =============== start service

var config = require('./lib/config')

console.log('config is', config.serialize())

var Service = require('./lib/service')

var service = new Service(config.serialize())

if (config.parent) {
  console.log('its a dowhaps deploy!')
  global.config = config
  let clientMaker = require('./lib/service/client')
  setTimeout(function () {
    config.parent.each(function (service) {
      if (service !== config) {
        service = service.val
        console.log('found another service! route:', service)
        clientMaker(80, service, config.id.val)
      }
    })
  }, 7000)
  
} else if (config.otherguy) {
  require('./dev/tcp-client')
}

// =============== start repl

var Repl = require('repl')
var repl = Repl.start({
  prompt: '> ',
  useGlobal: true
})
var context = repl.context

Object.defineProperty(context, 'q', {
  get: function () {
    console.log('k bye!')
    process.exit()
  },
  configurable: true
})

context.service = service
