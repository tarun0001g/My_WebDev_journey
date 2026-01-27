
// //Class and Objects 

// class Human{

//     //properties 
//     //these properties are public so it can be accessed out the class
//     name="tarun";
//     age;
//     ht=165;
//     #wt=60;
//    // private property : we have to apply #property_name. # cannot be accessed out side the class and also in any fn in a class

//     //to assign value to property(including private property) we used constructor and this. 

//     constructor(newAge,NewHeight,newWt){
//         this.age = newAge;
//         this.ht = NewHeight;
//         this.#wt = newWt;
//         //to pass values in constructor we used object declaration syntax
//     }

//     //Behavior
//     walking(){
//         console.log('Iam walking !');
//     }

//     running(){
//         console.log("Iam running! ",this.#wt);
//         //this.#propertyname can  access the property in the function of a class

//     }
//     eating(){
//         console.log("Iam eating!");
//     }

//     //--------GETTER AND SETTER METHOD-------//
//         get fetchWeight(){
//             return this.#wt
//         }

//         set assignWeight(val){
//             this.#wt = val;
//         }


// }

// //Object creation
// // let obj = new Human();
// let obj = new Human(20,166,70);

// console.log("new age :",obj.age);
// console.log("new height :",obj.ht);
// console.log("new weight :",obj.fetchWeight);
// // console.log("Name ",obj.name);
// // console.log("age ",obj.age);
// // obj.running();
// // obj.eating();

// //here fetchWeight and assignWeight are not a function, so we treat them as a variable

// // console.log("Weight is ",obj.fetchWeight);

// // let val = 50;
// // obj.assignWeight=val;
// // console.log("Weight is ",obj.fetchWeight);

// // console.log(#wt);// gets error
// //to access private property outside the class, we have to use getter and setter method 





//~~~~~~~~~ CONCEPT OF DEFAULT PARAMETERS~~~~~~~~~~//

// function sayName(fName="Holden",Lname="Ford"){
//     console.log("My name is :",fName," ",Lname);
// }

//we can also use toUpperCase & toLowerCase as a default value
// function sayName(fName="Holden",Lname=fName.toUpperCase()){
//     console.log("My name is :",fName," ",Lname);
// }

// sayName("Tarun");
// sayName();// it will print by default value
// sayName("tarun","makavana");
// sayName("tarun");


// we can also use object as a default value : { age:18, ht:158, name:"alex"}
// we can also add an array as a default parameter
// function sayName(fName = ["A", "L","E","X"] ){
//     console.log("My name is :",fName);
// }
// sayName();


// passing "null" and "undefined" argument in a function
// function sayName(fName="Holden"){
//     console.log("My name is :",fName);
// }
// sayName(null); //prints null
// sayName(undefined); // prints default value

//WE CAN ASLO SET ANOTHER FUNCTION AS A DEFALUT PARAMETER

function getAge(){
    return 7;
}

function showData(name = "Alex", age = getAge()){
    console.log("Name:",name," Age:",age);
}

// showData("Tarun",20);
showData();














