const { Schema, model } = require('mongoose');

const LoginSchema = new Schema({
    email:{ type:String, required: true },
    password:{ type:Number, required: true }

})

module.exports = model ('Login', LoginSchema);