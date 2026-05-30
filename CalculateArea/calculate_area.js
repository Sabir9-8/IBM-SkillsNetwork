let length;
let width;

function calculateArea() {
    lentgh = document.getElementById("length").ariaValueMax;
    width = document.getElementById("width").ariaValueMax;
    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}