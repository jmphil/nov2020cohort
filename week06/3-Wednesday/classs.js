// function display(data) {

//     console.log(data);

// }

// const futureData = fetch("https://twitter.com/veronica/tweets/");
// futureData.then(display); // Attaches display functionality
// console.log("Me First");

// let div = document.addEventListener("click", () => {

// }, 1000)

// setTimeout(() =>{
//     console.log('inside of setTime Out');

// }, 0)

// function fib (n){

//     if(n<2){
//         return n
//     }

//     return fib(n-2) + fib(n-1);
// }
    
// console.log(fib(30));

// console.log('outside of setTime Out');

//Promise//------------------------------------------
// function fib (n){

//     if(n<2){
//         return n
//     }

//     return fib(n-2) + fib(n-1);
// }


// let promise = new Promise((resolve, reject) => {
//         if(true){
//             let result = fib(40);
//             resolve(result);
//         }
//         else{
//             reject('there was an error')
//         }


// });

// promise.then(fibResult=>{
//     console.log(fibResult);
//     return fibResult * 2
// })

// promise.catch(error => {
//     console.log(error);
// })

// console.log(object);

// let fetch = new Promise((resolve, reject) => {
    
//     const request = new XMLHttpRequest(); // XHR Object

//     request.onreadystatechange = function(){
//             if(this === 400){
//                 resolve(this.responseText)
//             }
//     }

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//     request.send()

// });

// fetch.then(response => {
//     return JSON.parse(response)

// });

// fetch.then(data => {
//     console.log(data);
// })


let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1, p2])

.then(respArr=> {

    let arr = [];
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    return Promise.all(arr)

})
.then(data => {
    console.log(data);
})
