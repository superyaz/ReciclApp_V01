/* Conexion de la BD traida al index.js */
const { database } = require('./lib/dbConnect');
const keys = require('./config/keys')
    /* -------------------------------------------- */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const app = express();
require('./lib/passport');

app.set('port', process.env.PORT || 4000);

app.use(session({
    secret: 'mysqlsession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(keys)
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Variables Globales
app.use((req, res, next) => {
    next(); //para que el codigo continue y no se detenga a mostrar error por que falta una función en este middleware
});

/* User Routes */
app.use('/api/registerUser', require('./routes/api/user/registerUser'));
app.use('/api/authentication', require('./routes/api/user/authentication'));
app.use('/api/login', require('./routes/api/user/login'));

/* Admin Routes */
app.use('/api/getUser', require('./routes/api/admin/getUsers'));
app.use('/api/getAppointments', require('./routes/api/admin/getAppointments'));

app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});