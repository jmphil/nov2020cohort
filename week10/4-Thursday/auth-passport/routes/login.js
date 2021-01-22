const express = require('express');
const router = express.Router();
const authReq = require('../auth');

router.get('/login', (req, res ) => {
   res.render('login')  
});




module.exports = router; 