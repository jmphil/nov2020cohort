const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models')


router.get('/registration', (req, res ) => {
   
   res.render('registration')  
})

router.post('/registration', async (req, res ) => {
   
   let username = req.body.username;
   let password = req.body.password;
   let email = req.body.email

   //now hash password with bcrypt
   try {
   let passwordEncrypted = bcrypt.hashSync(password, 8);
      //add logic for duplicate users
   let insertResult = await db.users.create({
      username: username,
      email: email,
      password: passwordEncrypted,
      role: 1
   })
   
   res.redirect('/login')
   }
   catch(error){
      res.send(`cannot complete registration at this time`)
   }
})

module.exports = router; 