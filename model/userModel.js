const {Schema, model} = require('mongoose')

const schema = new Schema({
    firstName: {type: String, required: true},
    username: {type: String, required: true},
})

module.exports = model('user', schema)