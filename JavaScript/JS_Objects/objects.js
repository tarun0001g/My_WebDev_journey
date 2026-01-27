
// two types of objects in JavaScript
// Object sigleton - Only one instance of the object exists
// Object literals - Multiple instances of the object can be created

//Literal Object
//two ways to create an object literal
//1. Using object literal syntax
//2. Using the constructor method - Object.create()

// //1. Using object literal syntax

// const mySym = Symbol('key1'); //symbol is created
// const obj1 = {
// //  key : value
// // we can define both key and value in object
//     name : "Holden",
//     'full name' : "Holden Ford",
//     age : 30,
//     city : "New York",
//     email : 'john@google.com',
//     [mySym] :"mykey1"  // to use symbol as key 

// }

// //ACCESSING OBJECT
// console.log(obj1["full name"]); // Holden Ford
// // console.log(obj1.name); // John
// // console.log(obj1['age']); // 30
// // console.log( obj1[mySym]); // myKey1

// //chnages in object
// // obj1.age = 20; //updating age
// // obj1.email = "holden@email.com"; //updating email
// // Object.freeze(obj1); //freeze the object to prevent further changes
// // obj1.city = "Los Angeles"; // this change will not be applied
// // console.log(obj1);

// //adding fn in object
// obj1.greeting = function() {
//     console.log(`Hello Obj1, ${this.name} !`);
// }

// // console.log(obj1.greeting());
// obj1.greeting(); // Hello Obj1 !

//--------------------------------------------------------------------------------------------------------------------------------------

// KNOWING ABOUT SINGLETON OBJECT - [CREATED USING CONSTRUCTOR METHOD]
//Singleton object is an object that can have only one instance

const singletonObj = new Object(); // singleton object
// const nonSingletonObj = {}; //non singleton object

singletonObj.id = "001G";
singletonObj.name = "Mr. Singleton";
singletonObj.isLoggedin = false;
// console.log(singletonObj);

 //Learning Object inside object
// const regularObj = {
//     email : "holden@001gmail.com",
//     Fullname :{
//             FullUserName : {
//                 FirstName : "Holden",
//                 LastName : "Ford"
//             }
//     }
// }
// console.log(regularObj);
// console.log(regularObj.Fullname.FullUserName.FirstName);

//Merrging two objects

const objA = {1: "A", 2: "B"};
const objB = {3: "C", 4: "D"};
const objD = {5: "E", 6: "F"};

const objC = { objA, objB }; // this will create nested object
// console.log(objC);

//RIGHT WAYS TO MERGE TWO OBJECTS
// const mergedObj = Object.assign({}, objA, objB, objD);
const mergedObj = {...objA, ...objB}; // using spread operator
// console.log(mergedObj);


// accessing arrays of objects
// console.log(singletonObj);

// console.log(Object.keys(singletonObj)); //get array of keys
// console.log(Object.values(singletonObj)); //get array of values
// console.log(Object.entries(singletonObj)); //get array of key value pairs as nested arrays



//------------------------------------------------------------------------------------------------------------------------------------------
//Destructuring of objects

const course = {
    CourseName : "JS in Hindi",
    CoursePrice : 999,
    CourseInstructor : "Hitesh Choudhary"
}
console.log(course.CourseInstructor);
//whenn you use multiple time properties of any object 
//shorthand way to access these property

const {CourseInstructor: instructor} = course //Destructuring
console.log(instructor); // same value using  short name

