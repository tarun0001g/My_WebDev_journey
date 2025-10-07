
//Why async-await: to manage concept of promise perfectly,to write promises code clean, easy to debug
//async await: handles propmises efficiently
//when to use: Only during the concept of promises

//Async Function
// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside setTimeout block");
//     },3000)
// }
// getData();
//Note : every async fn always retun one promise in output
// let result = getData();
//result in console: result
// it will return one promise in output



//  What is await ?



//Fetch API : provides an interface for fetching resources across the network.
// Using GET, PUT, POST, DELETE etc requests via API we can perform operation across net.(fetch/update/create/delete)

//NORMAL SCENARIO FOR FETCH APIs:

//prepare URL/API endpoint (to find data) -> sync (quick execution)
//fetch data -> network call ->Async (not quick)
//process data -> operation on data ->sync (can't execute before receving data)

//Explanation: we can't process data before geting it. So execution will be stop at fetch data, when data is received-> line 38 will be execute. So we have to mark line 37 as await, so flow of execution will stopped here untill data is received. So This is how we provide sync behavior to async code



//Ex. of GET request using FETCH API:
async function getData() {

    // get request - async code
    let response = await fetch('https://jsonplaceholder.typicode.com/posts'); //marked await - exec st after comp of this line

    //parse real data from response. 
    let data = await response.json(); // also asnc task/code

    console.log(data);
}
getData();





