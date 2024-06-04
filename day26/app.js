/*
async function greet(){
    return "hello world";
}
greet.then().catch();

*/
/*
General Purpose

let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((result)=>{
    console.log(result);
    console.log(result.fact);
    return fetch(url)
})

.then((res)=>{
    console.log(res);
    return res.json();
})
.then((result)=>{
    console.log(result);
    console.log(result.fact);})

.catch((error)=>{
    console.log(error);
})*/

//Using await and async functions

let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await fetch(url);
        let result=await res.json();
        console.log(result.fact);
    }
    catch{
        console.log("Error Occured:"+error);
    }
}
getFacts();