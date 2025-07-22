const getData = async()=>{
    let data= await "hello world";
    console.log(data);
}

console.log(1);
getData();
console.log(2);


/*output
bash-5.2$ node asyncTask
1
2
hello world*/