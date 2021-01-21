const express = require('express');
const app = express();
var cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['goobergober'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))
app.get('/', (req, res) => {

    req.session.name = 'Matt';
    res.send('home page');
})
app.get('/about', (req, res) => {

    
    res.send(req.session.name);
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})