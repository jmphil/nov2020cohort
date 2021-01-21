const express = require("express");
const helmet = require("helmet");
const port = 3000;
const app = express();


// app.use(function(req,res){next()});

app.use(express.static('public'));
app.use(helmet());


let authLogin = (req, res, next) => {

    console.log(`we're checking authentication`);
    next()
};

app.get('/', authLogin, (req, res, next) => {

    if(true){
        res.send('home')
    }
    else{
        next(new Error('there was an error'))
    }
    
})


app.listen(`${port}`, () => {
    console.log(`listening on port ${port}`)
})