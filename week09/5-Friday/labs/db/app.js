const express = require("express");
const app = express();
//create new database
//config info for database
//learnpgpromise
let config = {
    host: 'localhost',
    port: 5432, 
    database: 'restaurant',
    user: 'postgres'
}
let pgp = require('pg-promise')();
//const db = pgp("postgres://username:password@host:port/database");
let db = pgp(config); //database object - gives access to perform CRUD operations

// console.log(db);

// db.query(`SELECT * FROM employees.department`)
// .then(records =>{
    //records = arr of objects
    // console.log(records);
    // console.log(records[3].dept_name);
//     let arr = records.filter(records => {

//         return records.id === 'd005'
        
//     });
//     console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log('error');
// })

// db.one(`SELECT * FROM employees.department WHERE id = 'd005'`)
// .then(result =>{
//     console.log(result.dept_name);
// })
// .catch(error=>{
//     console.log('error');
// })

// db.result(`INSERT INTO restaurants VALUES (DEFAULT, '&Pizza')`)
// .then(result =>{
//     console.log(result)
// })
// .catch(error => {
//     console.log(error);
// });
db.result(`INSERT INTO category VALUES (DEFAULT, $1)`, ['Romanian'])
.then(result =>{
    console.log(result)
})
.catch(error => {
    console.log('error');
});

app.listen(3000, (req, res) => {
  console.log(`listening on port 3000`);
});

// pgp.end()