#!/bin/node
'use strict'

// =============== start service

var config = require('./lib/config')

console.log('config is', config.serialize())

var Service = require('./lib/service')

var service = new Service(config.serialize())

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
