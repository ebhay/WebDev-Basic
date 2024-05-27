let btn= document.querySelector("button");  
btn.addEventListener("click",function() {
    let h1=document.querySelector("h1");
    let str=colr();
    h1.innerText=str;
});

btn.addEventListener("click",function() {
    let div=document.querySelector("div");
    let str=colr();
    div.style.backgroundColor=str;
});

function colr(){
    let r=Math.floor(Math.random() * 255);
    let g=Math.floor(Math.random() * 255);
    let b=Math.floor(Math.random() * 255);
    let col=`rgb(${r},${g},${b})`;
    return col;
}

