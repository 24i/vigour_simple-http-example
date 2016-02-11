'use strict'

var Observable = require('vigour-js/lib/observable')

var Service = new Observable({
  inject: [
    require('./server'),
    require('./files')
  ]
}).Constructor

module.exports = Service
