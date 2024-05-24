function OddEvenRequest(req) {
    if (req === "odd") {
        let odd = function (n) {
            if (n % 2 !== 0) {
                return true;
            }
            else {
                return false;
            }
            
        }
        return odd;
    }
    else if (req === "even") {
        let even = function (n) {
            if (n % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return even;
    }
    else
    console.log("Invalid request");
}
let req="Ala"