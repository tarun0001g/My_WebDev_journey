
const sumRequestHandler = (req, res) =>{
  console.log("We are in the Handler module", req.url);
  //Here we will get the data in chunks, so will will store them in an array and then we will parse them together and then we will perform the sum and send its result to client in form of response

  const body = [];
  req.on('data', (chunk) => {body.push(chunk)} );//pushed all data chunks in body array
  
  req.on('end',() => {
    //Note:- body means data.
    const bodyStr = Buffer.concat(body).toString(); //parsing data chunks in string format
    //The browser sends data like this: username=John&age=25 (called URL-encoded form of data)
    console.log(bodyStr);
    const params = new URLSearchParams(bodyStr); //This will parse and convert above data in object format(key-value pair format)
    const bodyObj = Object.fromEntries(params); //convert data in pure object format
    const result = Number(bodyObj.value1) + Number(bodyObj.value2);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head> <title>Practice set - Calculator</title></head>
        <body>
          <h1>The Sum is ${result}</h1>
        </body>
      </html>
      `);
      return res.end();
  })

}

exports.sumRequestHandler = sumRequestHandler;




