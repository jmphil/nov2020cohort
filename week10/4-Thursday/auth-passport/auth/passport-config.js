const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');

//req.body.username
//req.boyd.password


const init = (passport) => {

    passport.use(new localStrategy((username, password, done) => {
        console.log(`inside passport.use: username ${username}, password ${password}`);
        //db call
        //check db to see if user can navigate to other pages
        db.users.findAll({where: {username: username}})
        .then(records => {
            
            if(records != null){

                let record = records[0];

                bcrypt.compare(password, record.password, (err, res)=>{
                    //error here means password incorrect
                    if(response){
                        //this means match
                        done(null, {id: record.id, username: record.username})
                    }
                    else{
                        //password didn't match
                        console.log('incorrect password');
                        done(null, false)
                    }
                })
            }
            else{
                //no session if no record found of user
                console.log('user not found');
                done(null, false)
            }
        })
    }))



    passport.serializeUser((user, done) => {
        //passport adding info to sessions
        console.log(`serializing user`);
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        console.log(`deserializing user`);
        //checking to see if user is valid with the cookie that was passed from request
        // id is coming from session
        db.users.findByPk(id)
        .then(record => {
            done(null, record)
        })
    })

}

module.exports = init;