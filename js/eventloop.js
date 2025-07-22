//event loop in js

//synchronous task
console.log('This will run first');

//macrotask
setTimeout(()=>{
    console.log("This task will take time")
},0);

//microtask
Promise.resolve().then(()=>{console.log("This is will run after the main stack")});

//synchronous task
console.log("This task will run last")