
// this is a SAMPLE of how to include the TablePrefixer providor into your Adonis app

const path = require('path');

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  'adonis-apollo-server/providers/ApolloServerProvider',

  path.join(__dirname, '..', 'providers', 'TablePrefixer/Provider'),
]

// this is a SAMPLE of how to include the TablePrefixer providor into your Adonis app

