function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    // Check if inputs are valid numbers
    let flag = Number.isNaN(num1) || Number.isNaN(num2);

    if (!flag) {
        let result = multiply(num1, num2);
        displayResult(result);
    }
    else {
        displayResult("Please enter valid numbers");
    }
}

function multiply(x, y) {
    // Introduce a debugger statement to pause execution
    debugger;
    return x * y;
}

function displayResult(message) {
    // Display the result in the paragraph element
    document.getElementById("result").textContent =
    `The result is: ${message}`;
}