let inp=document.querySelector("input");
let p=document.querySelector("p");

inp.addEventListener("change",function(event){
    console.log(event.key);
    console.log(inp.value);
    p.innerHTML+=inp.value+"<br>";
    inp.value="";
});