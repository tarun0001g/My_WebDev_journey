

EXPLANATION AND UNDERSTANDING AND PRACTICES :

useRef is used to create a variable that persist its value without  re-render

basically useRef() returns an object
let x = useRef(0) -> x is an object
in this object, there is a current field where basically data is inserted/accessed (x.current = 0)
ex. useRef(0); means initial value at current: 0


the variables that are created sing useref they are a persistent 
means these variabes doesn's re render entire component

useRef() is also used to access/change any DOM element directly.
ex. changing color of one button using another
 
 Stopwatch project using useRef()




   