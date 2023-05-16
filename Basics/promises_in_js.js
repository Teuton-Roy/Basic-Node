/* 
    What is a promise?
    
    In simple example,
    with our daily-life, that, we orderd food from Zomato and Swiggy, and they promised us to deliver the food within few minutes.
    Then we do our task.

    So, in JavaScript, 
    Promise is a promise of code excution, that, it will be executed in future.
    The code either executed successfully or failed. 
    In both the cases, the user will be notified.

    Syntax:
    let Promise = new Promise(function(resolve, reject){
        // executor (the producing code)
    })

    Properties:
    In promise object, there are 2 properties:

    1. State: Initially panding, then changes to either "fulfiled" when resolve is called or "rejected" when reject is called.

    2. Result: Initially undefined, then changes to either "value" when resolve(value) called or "error" when reject(error) called.
*/


let promise = new Promise(function(resolve, reject){
    resolve(56)
})


console.log('Hello, Teuton 1st')

setTimeout(function(){
    console.log("Hola, Teuton after 2 seconds 2nd")
},2000)

console.log("My name is Teuton Roy, and I am a Web Developer 3rd")
console.log(promise)