
const fs = require('fs')

console.log("1. Start of script");

//synchronous (blocking) operation
console.log("2. Reading file synchronously");
const dayaSync = fs.readFileSync('demo.txt', 'utf8');
console.log("3. Synchronous read complete");

//asynchronous (non-blocking) operation
console.log("4. Reading file asynchronously");
fs.readFile('demo.txt', 'utf8', (err, dataAsync) => {
  if(err) throw err;
  console.log("6. Asynchronous read complete");
});

console.log("5. End of script");

