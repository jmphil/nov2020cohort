const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/index'));

app.get('/', (req, res) => {
    
    res.send("who will win the battle?")
})

app.listen(3000, () => {

    console.log.apply('Server running on port 3000')
});

