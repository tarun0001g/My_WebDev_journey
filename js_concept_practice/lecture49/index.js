
console.log("Jay hind !");

// //---------DYNAMIC NATURE OF A OBJECT-------//
// let obj = {
//     height: 165,
//     weight: 65,
//     color: "Blue",

// }
//  console.log(obj);

// obj.age = 20;
// //obj will automatically add or change data while runtime called : Dynamic property
// console.log(obj);

//-----------------------------------------------------------------------------------------------------------------------------------------------------


// //---------------------------CLONING OF AN OBJECT---------------------------------//



//-------Using ...(spread Operator)-----

// let src = {
//     age:20,
//     height: 165,
//     weight: 65,
//     color: "Blue",
// }
// let dest = {...src};

// //to check whether it is clone or just a copy of reference address 
// src.age=21;
// src.color="Black";

// console.log("Src :" ,src);
// console.log("Dest :",dest);



//-------Using  assign method-----//

// let src = {
//     age:20,
//     height: 165,
//     weight: 65,
//     color: "Blue",
// }
// console.log("Src :" ,src);

// let dest = Object.assign({},src);

//to check whether it is clone or just a copy of reference
// src.age=7;
// src.color="Green";

// console.log("Src :" ,src);
// console.log("Dest :",dest);


// ------------we can clone multiple object in dest using this method---------
// let src = {
//     age:20,
//     height: 165,
//     weight: 65,
//     color: "Blue",
// }

// let src2 = {
//     name:"Holden Ford",
//     ht:170
// }
// let dest = Object.assign({},src,src2);

// console.log("Src :" ,src);
// console.log("Dest :",dest);



//----------------------------CLONNING USING ITERATION----------------------------------//

let src = {
    age:20,
    height: 165,
    weight: 65,
    color: "Blue",
}

let dest = {};

for(let key in src){
    let newKey = key;
    let newValue = src[key];

    dest[newKey]=newValue;
}

//to check whether it is clone or just a copy of reference
src.age=7;
src.color="Green";

console.log(src);
console.log(dest);









