let cricle = document.getElementById("cricle");
let up = document.getElementById("up");
let down = document.getElementById("down");

let rotateValue = cricle.style.transform;
let rotateSum;
up.onclick = function (params) {
    rotateSum = rotateValue + "rotate(-90deg)"
    cricle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
down.onclick = function (params) {
    rotateSum = rotateValue + "rotate(90deg)"
    cricle.style.transform = rotateSum;
    rotateValue = rotateSum;
}