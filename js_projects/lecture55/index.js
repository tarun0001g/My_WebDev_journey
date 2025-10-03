

//Event looping for async code, to prevent entire code blocking

//sync code :normal execution 
console.log("Start");

//async code : this async code will handover to browser, and continue the execution of remaing code,
// when the call stack is empty, the sayName fn will handover to callback(task) queue, and then callstack for execution
setTimeout(sayName,5000)
function sayName(){
    console.log("Tarun Makavana");
}

//sync code: normal execution
console.log("End");


