Sample usages

// register the provider in your aa/start/app.js file

// include the provider in your source file (be it migration, seed, Model, -- any code that uses table names...)
const TablePrefixer = use('TablePrefixer/Provider');

// sample usages in migrations

  up() {
    this.create(TablePrefixer.prefixTable('users'), (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop(TablePrefixer.prefixTable('users'))
  }

// more complex usage in migrations

  up() {
    this.table(TablePrefixer.prefixTable('contacts'), (table) => {
      // alter table
      table.integer('location_id').unsigned().references('id').inTable(TablePrefixer.prefixTable('locations'))
      table.integer('preferred').unsigned().references('id').inTable(TablePrefixer.prefixTable('contact_options'))
      table.integer('kind').unsigned().references('id').inTable(TablePrefixer.prefixTable('contact_types'))
    })
  }

  down() {
    this.table(TablePrefixer.prefixTable('contacts'), (table) => {
      // reverse alternations
      table.dropForeign('kind').dropColumn('kind')
      table.dropForeign('preferred').dropColumn('preferred')
      table.dropForeign('curriculum').dropColumn('curriculum')
      table.dropForeign('location_id').dropColumn('location_id')
    })
  }


// sample usages in seeds

  await Database
    .table(TablePrefixer.prefixTable('contact_types'))
    .insert([
      {
        name: 'staff',
        description: 'staffer',
        created_at: now,
        updated_at: now,
      }, {
        name: 'client',
        description: 'client',
        created_at: now,
        updated_at: now,
      }, {
        name: 'faculty',
        description: 'neither a staffer nor a client be',
        created_at: now,
        updated_at: now,
      }
    ])

// sample usage in Models

class Contact extends Model {
  static boot() {
    super.boot()
  }
  static get table() {
    return TablePrefixer.prefixTable('Contact')
  }
}

