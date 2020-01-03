'use strict'

const pluralize = require('pluralize')

class TablePrefixer {

  constructor(Config) {
    this.Config = Config
    const database = this.Config.get('database')

    this.prefix = database[database.connection].tablePrefix
    if (!this.prefix) {
      throw new Error(`when attempting to find the field 'tablePrefix' in the '${database.connection}' database configuration`)
    }
  }

  prefixTable(givenTable) {
    return pluralize(givenTable.toLowerCase()).replace(/^/, this.prefix);
  }
}

module.exports = TablePrefixer

