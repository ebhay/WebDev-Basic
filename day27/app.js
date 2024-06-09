let url = "https://catfact.ninja/fact";
let imgurl = "https://api.thecatapi.com/v1/images/search";
async function getFacts(link) {
    try {
        let res = await axios.get(link);
        return res.data;
    } catch (error) {
        console.log("Error Occured:" + error);
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let factData = await getFacts(url);
    let imgData = await getFacts(imgurl);
    let p = document.querySelector("p");
    let img = document.querySelector("img");
    p.textContent = factData.fact;
    img.src = imgData[0].url ;
    //Ion
});
const uli = "https://icanhazdadjoke.com/";
async function getJoke() {
    try {
        let config = { headers: { Accept: "application/json" } };
        let res = await axios.get(uli, config);
        console.log( res.data);
    } catch (error) {
        console.log("Error Occured:" + error);
    }
}
