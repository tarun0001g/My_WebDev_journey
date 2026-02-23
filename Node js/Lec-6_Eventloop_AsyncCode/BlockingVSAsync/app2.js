console.log('1. Start of script');
// Run & Observe
// Microtask queue (Promise)
Promise.resolve().then(() => console.log('2. Microtask 1'));
// Timer queue
setTimeout(() => console.log('3. Timer 1'), 0);
// I/O queue
const fs = require('fs');
fs.readFile('user-details.txt', () => console.log('4. I/O operation'));
// Check queue
setImmediate(() => console.log('5. Immediate 1'));
// Close queue
process.on('exit', (code) =>
{  console.log('6. Exit event') });
console.log('7. End of script');

//output order:
// 1. Start of script
// 7. End of script
// 2. Microtask 1
// 3. Timer 1
// 4. I/O operation
// 5. Immediate 1
// 6. Exit event