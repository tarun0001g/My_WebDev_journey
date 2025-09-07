// console.log("Tarun Makavana");

// for(let i=1; i<=10; i++){

//     console.log("Tarun");

// }

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=5; i>0; i--){
//     console.log(i);
// }

// for(let t=1; t<=6; t++){
//     if(t==5)
//     break;
    
//     else
//     console.log(t);
    
// }

// for(let i=1; i<=5; i++){
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }


// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let t=1;
// do{
//     console.log(t);
//     t++;
// }while(t<=5);


// strings concept
//ways to create a strings :
// let name = "tarun makavana";
// let name2= 'tarun  tarun ';
// let name3=`makavana
//          tarun`;
// let fullName= new String("tarun Makavana");

//  console.log(name3);


//----Special properties on strings-----

//Concatenation of strings
//method-1
// let ops = sub1 + 'and' + sub2;
// console.log(ops);
//method-2: using template literals
// let ops = `${sub1} and ${sub2}`;
// console.log(ops);

//Check the length of the strings: var= string_name.length;
// let sub1_length = sub1.length;
// console.log(sub1_length);

//Conversion in Uppr case and Lowerr case
// console.log(sub1.toUpperCase());
// console.log(sub1.toLowerCase());

//substring method on strings
// let me="Tarun";
// console.log(me.substring(2));
// console.log(me.substring(1,3));
//NOTE: in substring,Startindex is counted,  but the endindex character is not included


//Use of backslash "/"
// let sentence = "Hello Jee \"Kaise\" Hoo Sare!!";
//Here we used / to remove the meaninng of " " in a string
// console.log(sentence);

//Split method on string,  Based on split() condition we can separate any string
// let sentence = "Hello Jee Kaise Hoo Sare!!";
// let words = sentence.split(" ");
// console.log(words)

//to devide the sentence using '/' we have to use '//' 
// because the meaninng of / is , remove the meaning of character after backslash '/' 

//Join method : it is used to join the separated words and convert into sentence using any 'separator'
let sentence = "Hello Jee Kaise Hoo Sare!!";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(' '));
