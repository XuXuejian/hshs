const mongodb = require('mongoose')

mongodb.connect('mongodb://127.0.0.1:27017/hshs')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`we're connected!`)
})