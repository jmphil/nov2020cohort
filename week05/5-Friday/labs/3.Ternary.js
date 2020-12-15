// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

// let isNumber = a => {

//     typeof(a) === "number" ? "that's the number" : "that's not a number";
//     // if (typeof (a) === "number") {
    //     return "that's a number";
    // }
    // else {
    //     return "That's not a number";

    // }
    //(condition) ? true : false;
// }

let isNumber = a => typeof(a) === "number" ? "that's not a number" : "That's not a number";
    


// console.log(isNumber(10));
// console.log(isNumber('hey there'));
// console.log(isNumber(true));

let a = 4;
let b = 5;

if (a > b){
    //block
}
else {
    ///block
}

a < b ? console.log("a < b") : console.log('false block of code');

let str = `${a + b}`

console.log(str);

