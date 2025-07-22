//Arrays Declaration

const list = ['list1','list2','list3']

list[2]='list4';
for(let x in list)
{
    console.log(list[x]);
}

//for-each method

let text=""
list.forEach(myFunction)

function myFunction(value)
{
    text+=value;
}
console.log(text);

//filter method

const numbers = [0,4,9,2]
const num=numbers.filter(myfucntion);


function myfucntion(val)
{
    return val>0;
}

console.log(num);

//sort method
numbers.sort();
console.log(numbers);

//map method


function addition(val)
{
    return val*2;
}
const  add = numbers.map(addition);
console.log(add);

//reduce method 

function multiplication(total,val)
{

    return total*val;
}
const singleValue = numbers.reduce(multiplication)
console.log(singleValue);