
 //promise for sync code(just for understanding purpose)
// let firstPromise = new Promise ((resolve, reject) =>{
//     // console.log("Tarun Makavana");
//     //we need to mark resolve or reject value for firstPromise
//     // resolve(2005);
//     reject( new Error("Internal Server Error"));
//     //type firstPromise in console to see the result of promise
// })


// //promise for async code(actually used in real world)
// let firstPromise = new Promise ((resolve, reject) =>{
// function sayName(){
//     console.log("Tarun Makavana");
// }
// setTimeout(sayName,5000);
// //when we declare resolve or reject then in console we get fullfilled or rejected promise state
// resolve(6);
// // if we dont declare, then it will be pending state
// })

// setTimeout(() => {
//     sayName();
// }, 5000);



//.then(), .catch() and finally() methods in promise

let promise1 = new Promise((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("Promise Resolved");
    }
    else{
        reject("Promise Rejected");
    }
})

promise1.then((message)=>{
    console.log("Then() ka message is :" + message);
}).catch((message)=>{
    console.log("catch() ka message is Error :" + message);
}).finally((message)=>{
    console.log("Finally() will run always");
})

//promise chaining
//Promise chaining means linking multiple .then() calls one after another.
//EXAMPLE - 1:
// let promise = new Promise((resolve, reject) => {
//   resolve(1);
// });

// promise
//   .then((num) => {
//     console.log("This is then() no :", num); 
//     return num +1;  // return value → next .then gets it
//   })
//   .then((num) => {
//     console.log("This is then() no :", num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log("This is then() no :", num);
//   });

//EXAMPLE - 2:(handling errors in chain)
// new Promise((resolve, reject) => {
//   reject("Something went wrong");
// })
//   .then((res) => {
//     console.log(res);  // skipped by reject state of promise
//     return "Next step";
//   })
//   .then((res) => {
//     console.log(res);  // skipped by reject state of promise
//   })
//   .catch((err) => {
//     console.log("Caught error:", err); // runs by reject state 
//   })
//   .then(() => { // this will run, because it's after the catch
//     console.log("This still runs after catch");
//   });

//Output:
// Caught error: Something went wrong
// This still runs after catch

