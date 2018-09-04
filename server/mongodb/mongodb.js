const mongodb = require('mongoose')

mongodb.connect('mongodb://localhost/hshs', {useNewUrlParser: true})

// mongodb.Promise = global.Promise
const db = mongodb.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`we're connected!`)
})