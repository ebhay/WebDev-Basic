let btn=document.querySelector(".sub");
let btn2=document.querySelector(".del");
let inp=document.querySelector("input");
let ol=document.querySelector("ol");

console.dir(ol.children.length);

btn.addEventListener("click",function(){
    console.log("btn-clicked");    
    console.log(inp.value);
    let li=document.createElement("li");
    li.textContent = inp.value;
    ol.appendChild(li);
    inp.value = "";
    
});

btn2.addEventListener("click",function(){
    ol.removeChild(ol.lastChild);
    ol.removeChild(ol.lastChild);
});