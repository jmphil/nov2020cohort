// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
let db = require('./models');

// db.user.update({
//     lastName: 'Phillips'
//   },
//   {
//     where: {
//         id: 2
//     }
//   })
//   .then(updatedRecord=>{
//     console.log(updatedRecord);
//   })
// db.user.findAll()
// .then(records => {
//     console.log(records);
    //array of objects
    //[{},{},{}]
// })

// db.user.findByPk(1)
// .then(function(post){
//     console.log(post);
//    });

// db.user.create({

//     firstName: 'Matt',
//     lastName: 'Phillips',
//     email: 'jmphil@github.com'
    
// });

// db.user.create({

//     firstName: 'Bailey',
//     lastName: 'Phillips',
//     email: 'bmp@github.com'
    
// });

db.blogs.findAll({
    // where: {},
    include: [{
        model: db.user,
        required: true

    }]
})
.then(records => {
    // [{}, {}, {}]\

    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})


