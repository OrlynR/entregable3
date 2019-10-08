const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://dbentregable:dbentregable@cluster0-i550w.mongodb.net/moviestore", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log(`DB is connect`))
  .catch(err => console.log(err));

// mongodb+srv://dbentregable:dbentregable@cluster0-i550w.mongodb.net/moviestore
