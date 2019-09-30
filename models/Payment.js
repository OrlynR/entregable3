const { Schema, model } = require('mongoose');

const PaymentsSchema = new Schema({
    email:{ type:String, required: true },
    amount:{type:Number, required:true},
    card_type:{type:Array, required: true},
    card_number:{type:Number, required: true},
    expiry_date:{type: Date, required: true},
    security_code:{type:Number, required:true},
    subscription_issue_date:{type: Date, required: true},
    subscription_expiry_date:{type: Date, required: true}
})

module.exports = model ('Payments', PaymentsSchema);