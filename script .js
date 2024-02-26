let result=document.getElementById("display");

let calculate=(number)=>{
    result.value+=number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid input");
    }
}
function clr(){
result.value='';
}
