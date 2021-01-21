const express = require('express');
const app = express();
const port = 3000;
const helmet = require('helmet');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(helmet());
app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));


app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`)
});