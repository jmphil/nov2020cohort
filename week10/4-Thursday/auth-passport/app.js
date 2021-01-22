const express = require('express');
const app = express();
const port = 3000;
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const passport = require('passport');
require('./auth/passport-config')(passport);
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


app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`)
});