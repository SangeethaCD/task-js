let OddEven = new Promise((resolve,reject)=>
{
    let num=4;
    if(num%2==0)
    {
        resolve("It is an even number");
    }
    else{
        reject("It is an Odd number");
    }
})

OddEven
.then((message)=>{console.log(message)})//success message
.catch((error)=>{console.log(error)})