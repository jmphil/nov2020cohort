const express = require('express');
const app = express();
//bodyParser
const bodyParser = require('body-parser')
//ejs
app.set('view engine', 'ejs');
//public
app.use(express.static('public'))
//routes
app.use(require('./routes/index'))

app.use(require('./routes/forum'))


app.listen(3000, () => {
    console.log("listening on port 3000")
})