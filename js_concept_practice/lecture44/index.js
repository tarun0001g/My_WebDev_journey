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
// push, pop, shifft, unshift, slice, spice, map, filter, reduce, sort, indexof, find
// let arr3=['tarun','makavana', true, 79]

// arr3.push("001");
// arr3.pop();

//remove element at left most side: tarun
// arr3.shift();
// console.log(arr3);
//added element at left most side
// arr3.unshift("TARUN");

// arr3.push(10);
// arr3.push(20);
// arr3.push(30);
// arr3.push(40);
// console.log(arr3);
 
//slice of an array, Note: right most index will be excluded
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
// let ary=[10,11,15,20,22,40,35,17]
// let fltr= ary.filter((number)=>{
//     return number%2===0;
    
 // if(number%2==0){
 //    return true;
 // }
 // else{
 //     return false;
 // }

//  })
// console.log(fltr);

// let arr = [1, 2,'tarun','makavana',null, 'ABC', 0]

// let ansArray = arr.filter((value)=>{
//   if(typeof(value)==='string'){
//     return true;
//   }
//   else{
//     return false;
//   }
// })
// console.log(ansArray);

//<<<------Reduce method in JS------>>>
//there is main two varibles are used accumulator(acc) and current(curr). these both are initiALIZED from given array.
// if we dont intialize the accumulator then it automatically selected as a first elemment of the array,
// current is also automatically initialized from given array, by default it is first value , but if first value is acc then current will be second value
// acc stores a single output value
// alt + Z


// let arr = [10,20,30,40];
// let ansArray = arr.reduce((acc,curr)=> {
//   return acc+curr;
// }, 0)

// console.log(ansArray);

//<<<------Sort method in JS------>>>
// let  arr = [1,5,3,7,2,9,0,3,4,5,6,8]

// arr.sort();
// console.log(arr);
// // descending order
// arr.sort((a,b)=>b-a);
// console.log(arr);

//<<<------indexof method in JS------>>>
// let  arr = [1,5,3,7,2,9,0,3,4,5,6,8]
// let arr1=[10,20,30,40,50]
//get value of any index
// console.log(arr);
// console.log(arr.indexOf(3));


//<<<------forEach method in JS------>>>
//to perform action on each element of an array forEach method is used
// let arr1=[10,20,30,40,50]
// arr1.forEach((Number,index)=>{
//   console.log("Number: ",Number,"Index: ",index);
// })


//length of an array: number of elements in an array, counting starts from 1
// let arr1=[10,20,30,40,50];
// let length = arr1.length;
// console.log("Length: ",length);
// console.log(arr1.length);

// for(let index=0; index<length; index++){
//   console.log(arr1[index]);
// }

//<<<------for...in method in JS------>>>
//used for object and array both 

// let obj = {
//   name:"tarun",
//   age:20,
//   clg:"ssec",
//   city:"rajula",
// }
// for(let key in obj){
//   // console.log(key);
//   console.log(key," ",obj[key]);
// }

//in array
// let arr = [10, 20, 30];
// for (let index in arr) {
//   console.log(index);      // prints "0", "1", "2" (the indexes)
//   console.log(arr[index]); // prints "10", "20", "30" (the values)
// }


//<<<------for...of method in JS------>>>
//applied on arrays,strings,map,sets,etc
//it returns direct values

// let arr=[10,20,30,40];
// for(let value of arr){
//   console.log(value);
// }

// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for(let val of str){
//   console.log(str);
// }

//function in an array
//sum of following array

let arr = [10,20,30,40,50];

// function generateSum(){
//   let len = arr.length;
//   let sum=0;
//   for(let index=0; index<len; index++){
//     sum = sum + arr[index];
//   }
//  return sum;
// }

function generateSum(arr){
  let sum=0;
  let len = arr.length;
  arr.forEach((value)=>{
    sum = sum + value;
  })
return sum;
}


let ansArray = generateSum(arr);
console.log(ansArray);








