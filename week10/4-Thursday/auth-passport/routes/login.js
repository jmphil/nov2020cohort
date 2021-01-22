const express = require('express');
const router = express.Router();
// const authReq = require('../auth');
let passport = require('passport'); //importing passport

router.get('/login', (req, res ) => {

   res.render('login')  

});


router.post('/login', passport.authenticate('local', { 

      successRedirect: '/protected',
      failureRedirect: '/login',
      failureFlash: true }));




module.exports = router; 