const express = require('express');
const router = express.Router()

router.get('/', (req, res) => { //index
    
    res.send('<h1>Hello, world!</h1>');
});

router.get('/cats?', (req, res) => {//cats url
    
    res.send(`<h1>"Meow"</h1>`);
  });

router.get('/dogs', (req, res) => {//dogs url
    
    res.send(`<h1>"Woof"</h1>`);
  });

router.get('/cats?_and_dogs?', (req, res) => {//cats and dogs
    
    res.send(`<h1>"Living Together"</h1>`);
  });
  
router.get('/greet/:name', (req, res)=>{//greet name entered

    var name = req.params.name || 'world';

    res.send('Hello, ' + name + '!');

  })

    

module.exports = router;