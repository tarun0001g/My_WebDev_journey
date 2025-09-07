// console.log("jay shree ram")

//---------Object in JavaScript----
// let obj={
//     name:"Holden",
//     //we can declare the key in "name" double inverted 
//     //main use of " " is in key declaration when there exist a space between key name
//     "full name":"Holden Ford",
//     weight:80,
//     height:"167cm",
//     //function in Object
//     greet: function(){
//         console.log("hey, how are you!");
//     }
// }
// console.log(obj);
// //calling the function from Object
// obj.greet();
// console.log(typeof(obj));



//-------Arrays in JavaSript------

//creation of arrays using literral notation []
// let arr=[1,2,3,4,5,6];
// let  arr2=[1,'Tarun',true,"001"]
// console.log(arr2);

//creation of array using constructor
// const fruits= Array("orange","mango","apple","banana");
// console.log(fruits);

//access of array elements
// let arr3=['tarun','makavana', true, 79]
// console.log(arr3[0]);
// console.log(arr3[2]);
// console.log(arr3[3]);


//Built-in methods
let arr3=['tarun','makavana', true, 79]

// arr3.push("001");
// arr3.pop();

//remove element at left most side
// arr3.shift();
//add element at left most side
// arr3.unshift("TARUN");

// arr3.push(10);
// arr3.push(20);
// arr3.push(30);
// arr3.push(40);
// console.log(arr3);

//slice of an array, Note: left most index will be excluded
// console.log(arr3.slice(2,6));

//splice of an array: (starting indexNo, no_of_values_To_Be_Removed, replacementValue) Note; it removes extra character from endIndex
// arr3.splice(2,4, "ABC");
// console.log(arr3);

//if we dont want to remove any element &just want to add new element at particular index
// arr3.splice(2,0, "ABC");
// console.log(arr3);


//MAP function in an array
// let arr=[10,20,30];

// arr.map((number)=>{
//     console.log(number+1);
// })

// arr.map((number,index)=>{
//  console.log(number);
//  console.log(index);
// })

// let ans= arr.map((number)=>{
//     return number*number;
// })
// console.log(ans);

//Filter function/method
let ary=[10,11,15,20,22,40,35,17]
let fltr= ary.filter((number)=>{
    return number%2==0;
    
    // if(number%2==0){
    //    return true;
    // }
    // else{
    //     return false;
    // }
})
console.log(fltr);






