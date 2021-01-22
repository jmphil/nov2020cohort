const express = require('express');
const app = express();  
const port = 3000; //local port
const helmet = require('helmet');
const bcrypt = require('bcryptjs'); //hashing or encryption
const passport = require('passport'); //one instance of passport
require('./auth/passport-config')(passport);
const flash = require('connect-flash');//flash module to add to ejs for success or redirect messages

//cookies
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: ['goobergober'],
    maxAge: 24 * 60 * 60 * 1000
}));

//ejs
app.set('view engine', 'ejs');
//parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//public 
app.use(express.static('public'));
//helmet
app.use(helmet());
//passport
app.use(passport.initialize());
app.use(passport.session());
//sub routes
app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));
//flash message
app.use(flash());


app.listen(`${port}`, () => {

    console.log(`listening on port ${port}`)

});