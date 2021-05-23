
const mongoose = require('mongoose');


process.env.NODE_ENV='development';
let config = require('./'+(process.env.NODE_ENV||'development')+'.json')

// Database Connection 
mongoose.connect(`mongodb://localhost:27017/${config.mongoDBConnect.database}`,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}); 


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));