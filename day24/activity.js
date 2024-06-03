let btn=document.querySelector(".sub");
let inp=document.querySelector("input");
let ol=document.querySelector("ol");

console.dir(ol.children.length);

btn.addEventListener("click",function(){
    console.log("btn-clicked");    
    console.log(inp.value);
    let item=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    item.textContent = inp.value;
    item.appendChild(delbtn);
    ol.appendChild(item);
    inp.value = "";
});

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let parent=event.target.parentNode;
        ol.removeChild(parent);

    }
});