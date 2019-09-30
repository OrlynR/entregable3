const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
    type_subcription:{ type:String, required: true },
    amount: { type:Number, required: true}
})

module.exports = model ('Service',ServiceSchema);