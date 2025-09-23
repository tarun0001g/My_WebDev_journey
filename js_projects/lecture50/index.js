

console.log("Hello jii");

//COMPILE TIME ERROR

//syntax error
//console.log(2;  

  

//RUNTIME ERROR

//reference error ,  x is not defined
// console.log(x);


//-------------------------------------------------------------------------------------------------------------------------------------------

//------------ERROR HANDLING--------------------------

// try{
// //You place the code that might cause an error inside the try block.
// //When the error is comes in this block, the execution will be stoped and move to the catch block

// //other lines of code to be execute
// //a
// //b
// //c

// console.log("TRY BLOCK STARTS HERE !!");
// //reference error
// console.log(x);
// console.log("TRY BLOCK ENDS HERE !!");


// }

// catch(e){

//     console.log("I AM INSIDE CATCH BLOCK !! ");

//     console.log("your error is here :",e);
//     // we can use e/err/error
// //catch: If an error occurs within the try block, the code execution immediately jumps to the catch block
// //This block receives an error object (often named err or error) with details about the problem.
// //the e is a variable that holds the error object
// // js creates an object with details about the error, and passes that object to the catch block. We use e (or a similar name like error or err) to catch and inspect that object.

// }

// finally{
//     console.log("I will run everytime !!");
// // this will run every timec
// //finally: This block is optional. The code inside finally will execute regardless of whether an error occurred or not. It's often used for cleanup tasks, like closing a file or a database connection.

// }

//-----------------------------------------------------------------------------------------------------------------------------

//------------throw keyword --------------------------//
// create an error in your words 
//EXample-1
// try{

//     //reference error
//     console.log(x);
//     //When the JavaScript engine hits a throw, it stops executing the current block and looks for the nearest try…catch to handle that error.
// }

// catch(err){

//     throw new Error("Bhai Pehle variable declare to karlo !!");
    
// }

//Example-2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); // manually raise error
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // error thrown
} catch (err) {
  console.log("Error caught:", err.message);
} finally {
  console.log("Done");
}




