//import path module//

const path = require('path');

//using some of the methods//

const a = path.basename('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(a); //this will give the base name of the file//

const b = path.dirname('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(b); //this will give the directory name of the file//

const c = path.extname('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(c); //this will give the extension name of the file//

const d = path.parse('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(d); //this will give the parse of the file//

const e = path.join('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(e); //this will join the path of the file//

const f = path.resolve('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(f); //this will resolve the path of the file//

const g = path.normalize('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(g); //this will normalize the path of the file//

const h = path.isAbsolute('c:/Users/Teuton Roy/Desktop/Node.js/Node.js Basics/Pathmodule.js');
console.log(h); //this will check the path is absolute or not//

