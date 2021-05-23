const mongoose = require('mongoose')

const  queries = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('queries', queries)
