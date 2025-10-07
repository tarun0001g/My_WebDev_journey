

//-----------ADDING ELEMENT AT ANY POSITION IN HTML PARENT TAG---------//

// let mydiv = document.querySelector("#mydiv");
// let newElement = document.createElement('span');

// newElement.textContent = "This is me Tarun Makavana";

// mydiv.insertAdjacentElement("beforebegin",newElement)



//-------------REMOVING AN ELEMENT-----------------//

let parent = document.querySelector("#mydiv");
let child = document.querySelector("#fpara");
parent.removeChild(child); //removing first para

// let child2 = document.querySelector("#spara");
// parent.removeChild(child2)  //removing span tag
