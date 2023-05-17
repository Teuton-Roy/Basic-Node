//resolve
let promise = new Promise(function(resolve, reject){
    
    console.log("Promise is in pending state")
    setTimeout(()=>{
        console.log('I am in Promise and I am resolve')
        resolve(true)
    },5000)
})
// console.log(promise)

//Reject
let promise1 = new Promise(function(resolve, reject){
    
    console.log("Promise is in pending state")
    setTimeout(()=>{
        console.log('I am in Promise and I am rejected')
        reject(new Error('I am rejected'))
  },5000)
})
// console.log(promise, promise1)

promise.then((value) => {
    console.log(value)
})