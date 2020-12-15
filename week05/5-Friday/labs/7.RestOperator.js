// ***Rest Operator
//Assign values to the a, b, c variables using destructuring and rest operator

// var a, b, c;
// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(a);
// 1
// console.log(b);
//2

// console.log(c);
//[3, 4, 5, 6, 7]



// ######## Rest Parameters #########

let logArg = (...args) => {

    let sum = 0;

    sum = args.reduce((acc, elem) =>{
        return acc + elem;
    },0)
    
}

logArg(5, 6, 7, 8, 9, 10)