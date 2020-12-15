// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

setTimeout(function () {
    console.log(mult(5, 10));
}, 1000)

var arr = [1, 2, 3, 4]

var a = arr[0];

//obj destructuring

let arr = [1, 2, 3, 4];

let [a, b, c, d];