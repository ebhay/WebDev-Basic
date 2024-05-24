function OddEvenRequest(req) {
    if (req === "odd") {
        const odd = function oddchecker(n) {
            if (n % 2 !== 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else if (req === "even") {
        const even = function evenchecker(n) {
            if (n % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else
    console.log("Invalid request");
}
let req="Ala"