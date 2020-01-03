'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class TablePrefixerProvider extends ServiceProvider {
  register() {
    this.app.singleton('TablePrefixer/Provider', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('.'))(Config)
    })
  }
}

module.exports = TablePrefixerProvider
