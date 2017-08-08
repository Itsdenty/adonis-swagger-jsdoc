'use strict'

/**
 * adonis-validation-provider
 * Copyright(c) 2015-2015 Harminder Virk
 * MIT Licensed
*/

const ServiceProvider = require('adonis-fold').ServiceProvider

class SwaggerjsdocProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Dent/Custom/SwaggerjsdocProvider', function (app) {
      return require('../lib/index') 
    })
  }
}

module.exports = SwaggerjsdocProvider