let length;
let width;

function calculateArea() {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}