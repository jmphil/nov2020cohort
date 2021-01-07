const express = require('express');
const app = express();


//ejs
app.set('view engine', 'ejs');
app.set('views', 'views')
//public
app.use(express.static('public'));
//route references 
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
//port
app.listen(5000, () => {
  
    console.log('Server is running on port 5000');
})


