//import file system module//

const fs = require('fs');

//using some of the methods//

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(err, data)
// }) 

const a = fs.readFileSync('file.txt')
console.log(a);
console.log(a.toString());

console.log("Finished reading file");
