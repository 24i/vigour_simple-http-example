'use strict'

exports.files = {
  on: {
    data (val) {
      // --------- find files
      console.log('files is set! lets require and inject!')
      console.log('inject files!')
      var files = this
      let injects = []
      files.each(function (file) {
        console.log('add', file.val, 'to injects')
        injects.push(require(file.val))
      })
      console.log('got injects!')

      // --------- inject them (Observable.inject(Array) is no good)
      var service = files.parent
      for (let inject of injects) {
        service.inject(inject)
      }
      // service.inject(injects)
      console.log('service', service.serialize())
      console.log('injected with', injects)
    }
  }
}
