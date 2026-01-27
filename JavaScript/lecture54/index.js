//we will create two codes and will analyze their performance in the browser console


//CODE-1

const t1 = performance.now(); // this will give the time in milliseconds
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    document.body.appendChild(para);
    // In this code we are creating 100 paragraph elements and appending them directly to the body of the main document
}
const t2 = performance.now(); 
console.log("Time taken to execute CODE-1 is:", (t2-t1) ); //// use console of the browser to see the time for code-1
//Time taken to execute CODE-1 is: 0.3000000002793968
// 100 Reflow & Repaint will be used in this code



//CODE-2 

const t3 = performance.now(); // this will give the time in milliseconds

let mydiv = document.createElement('div'); // creating a div element
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    mydiv.appendChild(para); // appending the paragraph to the div
}
document.body.appendChild(mydiv); // appending the div to the body of the main document

const t4 = performance.now(); 
console.log("Time taken to execute CODE-2 is:", (t4-t3) ); 
//Time taken to execute CODE-2 is: 0.09999999962747097


 //-----------------------BEST PRACTICE FOR BEST CODERS------------------------//

//CODE-3 (BEST PRACTICE)

const t5 = performance.now(); // this will give the time in milliseconds 

let fragment  = document.createDocumentFragment(); // creating a document fragment
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    //the below line will not use any Reflow & Repaint
    fragment.appendChild(para); // appending the paragraph to the fragment document (lightweight document)
}
document.body.appendChild(fragment); // appending the fragment to the body of the main document

const t6 = performance.now(); 
console.log("Time taken to execute CODE-3 is:", (t6-t5) ); 
