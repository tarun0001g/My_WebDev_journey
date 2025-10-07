
//---------------NESTED FUNCTIONS------------------//

// function outerFn(){
//     let name = "Tarun";
//     function innerFn(){
//         console.log(name);
//     }
//     innerFn();
// }
// outerFn();


// function outerFn(){
//     let name = "Tarun"; //let ->Block scoped {...}, name->can used in child fn
//     function innerFn(){
//         let surname = "Makavana"; 
//         console.log(name); 
//         console.log(surname);
//     }
//     // console.log(surname); //gets error, because can't be accessed outside
//     innerFn();
// }
// outerFn();


//-----------------------CONCEPT OF CLOSURE--------------------------//
//Closure:A closure is a function inside another function that has access to variables(data) of the outer function even after the outer function is done running.
//The closure fn keeps(remembers) the data(varables) of outer fn
// The data are binded to the closure fn, so it can use it later

function outerFunction(){
    let name = "Holden Ford";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}

let inner = outerFunction(); //indirectly outerFunction() will return innerFunction reference
inner();
//Result: Holden Ford



