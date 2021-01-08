const express = require('express');
const router = express.Router();


router.get('/aboutus', () => {
  
    res.render('about');
})

module.exports = router;