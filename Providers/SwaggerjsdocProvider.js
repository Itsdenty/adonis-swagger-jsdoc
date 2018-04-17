'use strict'

/**
 * adonis-validation-provider
 * Copyright(c) 2015-2015 Harminder Virk
 * MIT Licensed
*/

const {ServiceProvider} = require('@adonisjs/fold')
const _ = require('lodash')

class SwaggerjsdocProvider extends ServiceProvider {

  // * register () {
  //   this.app.singleton('Dent/Custom/SwaggerjsdocProvider', function (app) {
  //     return require('../lib/index') 
  //   })
  // }
    /**
   * Register auth provider under `Adonis/Src/Auth` namespace
   *
   * @method
   *
   * @return {void}
   *
   * @private
   */
  _register () {
    this.app.singleton('Dent/Custom/SwaggerjsdocProvider', (app) => {
      return require('../lib/index')
    });
  }
    /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this._register()
  }
}

module.exports = SwaggerjsdocProvider