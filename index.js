const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override'); 

const cors = require('cors');


const exphbs= require('express-handlebars');


//Initiliazations
const app = express ();
require('./db');

// setting
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts') ,
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

//Middlewares // funciones que van hacer ejecutadas antes de llegar al servidor ó pasarselos a las rutas
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method')); //Nos sirve para que los formularios puedan enviar otro tipo de metodos como put y delete 

//Global variables

//Routes

//routes-api
app.use(require('./routes/api/index'));
app.use(require('./routes/api/users'));
app.use(require('./routes/api/movies'));
app.use(require('./routes/api/payments'));
app.use(require('./routes/api/services'));

//routes-view
app.use(require('./routes/view/index'));
app.use(require('./routes/view/users'));
app.use(require('./routes/view/movies'));
app.use(require('./routes/view/payments'));
app.use(require('./routes/view/services'));
//Static files
app.use(express.static(path.join(__dirname,'public')));

//Server connect
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));

})