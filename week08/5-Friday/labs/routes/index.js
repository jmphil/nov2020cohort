const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser')

router.use(express.urlencoded({extended: false}));
router.use(express.json())


router.get('/', (req, res) => {
    
    res.render('index')
})


router.post('/', (req, res) => {

    let fName = req.body.fname;
    let lName = req.body.lname;

    console.log(req.body);
    res.send(`${fName} ${lName}`)
})
module.exports = router