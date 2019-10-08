const {Schema,model} = require('mongoose');

//Define this const for mongoose can read the model 
const MovieSchema = new Schema({
    video: {type: String, required: true},
    category: {type: Array,required: true},
    type:{type: String,required:true},
    title: {type: String,required: true},
    director: {type: String,required: true},
    year: {type: Number,required: true},
    time: {type: String,required: true},
    language: {type: String,required: true},
    subtitle: {type: String,required: true},
    dubbing: {type: String,required: true},
    date: { type: Date, default: Date.now }
})

module.exports = model('Movie', MovieSchema);