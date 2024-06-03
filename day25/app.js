/*
function one(){
    return 1;
}
function two(){
    return one()+ one();
}
function three(){
    return two()+one();
}
three();
*/

//Call back Hell
/*
let h = document.querySelector("h1");
function sty(col, delay, nextcall) {
    setTimeout(function () {
        h.style.color = col;
        if (nextcall)
            nextcall();
    }, delay);
}

sty("red", 1000, () => {
    sty("green", 1000);
});

*/
// Promise
function sty(col){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4)
            resolve();
        else
            reject();
    }
};