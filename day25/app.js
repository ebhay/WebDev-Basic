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
function sty(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4  )

            resolve("success:data was saved");
        else
            reject("failur:data fucked up");
    })
};
/*
sty().then(()=>{
    console.log("resolved: data 1 saved");
    sty().then(()=>{
        console.log("resolved: data 2 saved");
    });
}).catch(()=>{
    console.log("rejected");
});
*/
sty("apna college")
.then((result)=>{
    console.log("resolved: data 1 saved");
    console.log("status"+result);
    return sty();
})
.then((result)=>{
    console.log("resolved: data 2 saved");
    console.log("status"+result);
})
.catch((error)=>{
    console.log("status"+error);
    console.log("rejected");
});

