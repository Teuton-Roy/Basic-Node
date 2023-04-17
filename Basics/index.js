console.log("Hello World");

//now, in index.js we want to access the function in the other file//
//we are going to export from Second.js//


const MyInfo = require('./Second.js'); //this is the path to the file we want to import//
console.log(MyInfo);