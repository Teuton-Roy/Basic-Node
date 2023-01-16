// This file exports the function//

// This is the function we want to export//

MyInfo = {
    name: 'Teuton Roy',
    age: 23,
    location: 'West Bengal',
    occupation: 'Student',
    Collage: 'NIT Jamshepur',
    Branch: 'Computer Science and Engineering',
    Course: 'MCA',
    Year: 'Second Year',
    Roll: '2021PGCACA070',
    Email: '2021pgcaca070@nitjsr.ac.in',
    Phone: '8972028100',
    Developer: 'true'
}

// console.log(exports, require, module, __filename, __dirname);

module.exports = MyInfo;

//Now we are going to import this MyInfo object in index.js//

/*
    This [second.js] called [CommonJS module system] : which is refers some contant from this file and export it to another file.
*/


/*
    What is module rapper function?
    This is a function that wraps around the code of every single file in the node application.

    (function(exports, require, module, __filename, __dirname){
        //code goes here
    })


*/