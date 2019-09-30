const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbentregable:dbentregable@cluster0-i550w.mongodb.net/moviesstore?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`DB is connect`))
.catch(err => console.error(err))