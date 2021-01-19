const express = require('express');
const router = express.Router();
const db = require('../models/database');
router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get(`/newDish`, (req, res) => {

    db.query(`SELECT * FROM categories`)
    .then(records =>{
        res.render("newDish",{
            categories: records
        })

    })
    
});

router.post('/newDish' ,(req, res) => {
    let name = req.body.name;
    let category = req.body.category;
    let fooddescription = req.body.description;
    let price = parseFloat(req.body.price);
    let imageURL = req.body.imageURL;
    let course = req.body.course;

    //insert into db

    // db.none(`INSERT FROM restaurants (name, category, fooddescription, price, course, imageURL) VALUES ($1)`)
    db.none(`INSERT INTO restaurants (name, category, 
        fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, category, fooddescription, price, course, imageURL])
        .then(()=>{
    
          res.redirect('/dishes')
        })
        .catch(error =>{
          res.send(error)
        })
})



module.exports = router;