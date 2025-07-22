console.log("Javascript is working");

//variable declaration:
let count=0;


//function declaration:
function add()
{
    count++;
    document.getElementById("counter").innerHTML=count;
}


//object creation:
const car = {
    Name:"Fyora",
    Color:"red",
    length:22
};
car.name = "ADI";
car.Color="blue";
car.length=55;

console.log(car.Name,car.Color,car.length)

//object with the new kwyword
const people = new  Object();



//nested object
const bike={
    Name:"Fyora",
    color:"blue",
    length:90,
     model:{
        id:1234,
        amount:900.00
    },
    details:function(){
        return this.Name+" "+this.color;
    }
};

bike.model.id=5678;
console.log(bike.model.id);
Name=bike.details();
console.log(Name);


//object constructor
function Bike(name,color,length,id,amount)
{
    this.Name=name,
    this.color=color,
    this.length=length,
    this.id=id,
    this.amount=amount,
    this.details=function(){
        return this.Name+" "+this.color;
    }
}

const bike1 = new Bike("royalenfield","blue",45,23,3000)

//object mehtods
const values= Object.values(bike1);
console.log(values);




