// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.


// let newSum = 

// sum(1,3);
// sum(10, 20, 5);




// const isUnique = (arr) => {

//     let cache = {};
//     let result = true;

//     for (let i = 0; i < arr.length; i++) {
        
//         if(cache[arr[i]]){
//             return false;
//         }
//         else{
//             cache[arr[i]] = true;
//         }
//     }
//     return result;
//   };

// let arr1 = [1, 2, 3, ]; 

// console.log(isUnique(arr1));

// let arr = [1, 5, 3, 3,  5, 2, 1]

// const uniqSort = function(arr) {

//     let cache = {}
//     let result = []

//     for (let i = 0; i < arr.length; i++){

//         if(!cache(arr[i])){
//             result.push(arr[i]);
//             cache[arr[i]] = true;
//         }
        
//         result.reduce ((a, b) => a-b)

        
//     }


    

// };

// Big O Notation practice #### Anagrams ######
// function anagrams(strA, strB) {
    
//     strA = strA.replace(/[^\w]/g, '').toLowerCase()
//     strB = strB.replace(/[^\w]/g, '').toLowerCase()

//     return sortString(strA) === sortString(strB)
// }


// function sortString(string) {
//     return string.split('').sort().join('');
// }



// console.log(anagrams('rail safety', 'fairy tails'))
// console.log(anagrams('RAIL! SAFETY!', 'fairy tails'))
// console.log(anagrams('Hi there', 'Bye there'))

// ###### Memoization #######

// const times10 = (n) => n * 10;

// console.log('times10 returns:', times10(9));

let cache = {};

const memoTimes10 = (n) => {
    if(n in cache){
        console.log('Fetching from cache', n)
        return cache(n);
    }
    else {
        cache[n] = n * 10;

        console.log('Calculating results');
    }

    return cache[n]
}

memoTimes10(9)
// memoTimes10(9)