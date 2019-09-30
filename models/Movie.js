const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    movie :{type:String, required: true },
    title:{ type:String, required: true },
    author:{ type:String, required: true },
    year:{type:Number, required: true},
    time:{type: Date, required: true},
    languague:{type:String, required:true},
    subtitle:{type: String, required:true},
    dubbing:{type: String, required: true},

})

module.exports = model ('Movie', MovieSchema);