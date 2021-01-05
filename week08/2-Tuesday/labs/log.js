let log = {

    firstName : 'James',
    lastName : 'Bond',
    age: 100,
    info: function(info){
        console.log(`Info ${info}`)
    },
    warning: function(warning){
        console.log(`Warning ${info}`);
    },
    error: function(error){
        console.log(`Error ${info}`);
    },
}
// let names2 = {

//     firstName2 : 'Peter',
//     lastName2 : 'Pan'
// }

module.exports = log;