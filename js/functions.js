
//function declaration:
function add()
{
    count++;
    document.getElementById("counter").innerHTML=count;
}

//self-calling function
(
    function(){
        console.log("Look!I called myself");
    }
)();