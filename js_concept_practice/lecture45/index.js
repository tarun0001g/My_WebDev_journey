// console.log("who are you ?");

//hoisting: 1)Variable hoisting 2)function hoisting

//____variable hoisting______

// console.log(a); //undefined
// var a=5;
// let a=5;// can't access a before assignment, because let and const not allow them
// const a= 5;//Reference error
// console.log(a);//5


// ______function hoisting____

// sayMyName("Heisenberg");
// function sayMyName(myName){
//     console.log(myName);
// }

//function hosting is not possible when we used function expression

// sayHi();
//  function sayHi() {
//   console.log("Hi");
// }

// sayHi(); // ❌ TypeError
// var sayHi= function() {
//   console.log("Hi");
// }


//_____Class hoisting_____

//class: it is collection of objects or properties
// object is a instance or single property or  example of a class
//Ex.


// var obj2 = new Man();// objects can'be used before class declaration
// class Man {

// }
// var obj2 = new Man();


//--------FUNCTION AS A FIRST CLASS CITIZENS----------//
// fn CAN BE ASSIGNED TO A VARIABLE\
// let greet = function (){
//     console.log("Greetings!!");
// }
// greet();

//FN PASS AS AN ARGUMENT

// function sayGreet(greet,sayMyName){
//     console.log("Hello ",sayMyName);
//     greet();
// }

// function greet(){
//     console.log("Greetings of the day!!");
// }

// sayGreet(greet,"Tarun");

//-----FN CAN RETURN ANOTHER FN------

// function getSquare(number){
//     return function (number){
//         return number*number;
//     }
// }

// let ans = getSquare(4);
// //here ans becomes a function itself, whenever you call getSquare(x), you don’t get a number back, you get a function back.
// //You pass 4 into getSquare., getSquare(4) returns the inner function. That inner function is stored inside ans..

// let finalAns = ans(10);
// console.log(finalAns);

//-------array of a function-------
// const arr = [
//     function (a,b){// item - 1 
//         return a+b;
//     },
//         function (a,b){// item - 2
//         return a-b;
//     },
//         function (a,b){// item - 3
//         return a*b;
//     }

// ]
// let ans = arr[2];
// let finalAns = ans(5,5);
// console.log(finalAns);

//---------FUNCTION AS A PROPERTY OF AN OBJECT----

const obj = {
    name: "tarun",
    wt:65,
    ht: 166,
    age:20,
    greet: ()=>{
        console.log("hello jii");
    }
}
obj.greet();
//function called from object
console.log(obj.name);

