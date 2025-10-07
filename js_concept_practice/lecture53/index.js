

//----------EVENT LISTENER : APPLYING EVENT(ACTION) ON ELEMENT/TAG----------//

// let fpara = document.getElementById("fpara");

// //using following method we can apply actions on event-target
// fpara.addEventListener('click',changeText);
// //fpara.removeEventListener("click",changeText);

// function changeText(event){
//     fpara.textContent = "Hello Alex";
//     console.log(event);  //listener fn will shows event type & its data
//     //we can utilize/analyz/access/view the info of event by using(printing) event object

// }




//---------CHANGING DEFAULT ACTION of ELEMENT----------//

// let aTag = document.getElementById("atag");
// aTag.addEventListener('click',changeDefault)

// function changeDefault(event){
//     event.preventDefault();
//     aTag.textContent = 'Click Done Bhai!!';
//     //in this fn, the by default action will be stopped by .changeDefault() method
// }



//-----------AVOIDING TO USE TOO MANY LISTENERS------------//

//WAY - 1 : Separate listeners of each paragraphs

// let paras = document.querySelectorAll("p");
// for (let i = 0; i<paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You have clicked on para :" + (i+1))
//     })
// }

//WAY - 2 : 1 listener for all paragraphs
// function clickChange(event){
//         alert("You have clicked on para :" + event.target.textContent );
//     }

// let paras = document.querySelectorAll("p");
// for (let i = 0; i<paras.length ; i++){
//     let para = paras[i];
//     para.addEventListener('click',clickChange);
// }

// NOTE : A .target tells listener that, on which element you have clicked

//WAY - 3 : Apply listener directly with div (parent)

let mydiv = document.getElementById("wrapper");
mydiv.addEventListener('click', clickChange);
// document.addEventListener('click', clickChange);

// function clickChange(event){
//         alert("You have clicked on para :" + event.target.textContent );
//     }

//if we want alert for only span element then,
function clickChange(event){
    if(event.target.nodeName === "SPAN"){
        alert("You have clicked on para :" + event.target.textContent );
    }
    }

 








