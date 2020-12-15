// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }
// let mult = (obj => {
    
//     let {x, y, z} * obj;

//     return x * y * z;

// })

// console.log(mult(obj));
//300


/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantity field it should get default value 0.
*/


var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantity: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }

}

let person = (obj)  => {

    let {name:n, info: {country:c, age:a}, postsQuantity:p =0} =  obj;
    
    console.log(`name: ${n}, country: ${c}, age: ${a}, postsQuantity: ${p}`);
} 

// person(person1);
// person(person2);

// --------#########

// let a = 5;
// let b= 10;

// if(b > a){
//     console.log('a is less than b');
// }
// else{

// }
// a > b ? console.log('a is less than b') : console.log('a is greater than b');

// let str = `this is my result ${a > b ? 4: 10}`


// Default Parameters ###################################
let add = (x=0, y=0) => {
   
    
    return x + y

    
}

console.log(add(1,2));

// ######## Rest Parameters #########

// let logArg = (...args) => {

//     args.forEach(el => {
//         console.log(el);
//     })
    
// }
// logArg(5, 6, 7, 8, 9)


// let arr = [1, 2, 4, 5, 6];

// let [a, b, c, d, e] = arr;

// console.log(a, arr);