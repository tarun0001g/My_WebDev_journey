
// we will use reference of vitereact for making this project
//in this project we will see, how the react receive/view the returned html content
// Generally we return xlm (js+html return) to react in the readable form for react. 

function customRender(reactElement,mainContainer){ //we are basically simulating what React’s rendering engine does internally.

    //way-1 for rendering
  /*  const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement); */

    // way-2 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; // Set the text content or inner HTML
    // Loop through all properties in props
    for (const prop in reactElement.props) {
        if (prop === 'children')
             continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement); // Append the newly created element to the main container
}

// react view/receive/convert the returned item of html(xml) as below::
//react view each item as below
const reactElement = {
    type: 'a',  //can be any type of tag: div/para/h2/etc..
    props: {  //properties
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to vist Google' // text inside the tag
}

const mainContainer = document.querySelector('#root') //The below fn will render the Render the entire XML content


customRender(reactElement,mainContainer);// we need a method which render the reactElement, means add reactElement in root



