let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        alert('I am in Promise and I am resolve')
    },5000)
})