
console.log("Tarun Makavana is here!")

const fs = require('fs');

fs.writeFile('Text.txt', 'This is the text file created by me', (err) => {
  if(err){
    console.log("Error is occured!");
  }
  else{
    console.log("File created successfully!");
  }
});