

//------GLOBAL SCOPe VARIABLE-----//

// console.log(age);

//  var age = 20;
// let age = 20;
// const age = 20;

// console.log(age);

// {
//     console.log(age);
// }

// if (true){
//     console.log(age);
// }

// for(let i=0;i<1;i++){
//     console.log(age);
// }

// function sayHii(){
//     console.log("Hii ",age);
// }

// sayHii();


//----FUNCTION SCOPE VARIABLE----//
//function scope is same for all types of variable declarations- var, let , const
// function sayHello(){
//     var name = "Tarun";
//     console.log("Hello...",name);
// }
// sayHello();

// console.log(name);// leads to reference error, because var is function scoped so it cant access outside of its function


//-----BLOCK SCOPE VARIABLE--------//

{
     var name="tarun"; //var type declaration is not block scoped, it can be access outside the block { }
    
    // let name="tarun"; // let is block scoped declaration
    // const name="tarun"; // const is also block scoped declaration

     console.log(name);
}
 console.log(name);

//-------TEMPORAL DEAD ZONE------//
//  the zone where we cant access some variables even if it declared later in the code
// console.log(name);
// let name = "tarun"; //so that, the temporal deadzone is exists between line no 57 to 58
// console.log(name);






