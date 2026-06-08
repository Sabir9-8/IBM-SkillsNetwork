let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;

    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    //console.log(startTime);
}

function endTest() {
    endTime = new Date().getTime();
    //console.log(endTime);
    const userInput = document.getElementById("userInput");
    userInput.readOnly = true;
    let timeElapsed = (endTime - startTime) / 1000;
    let userText = userInput.value.trim();
    let typeWords = userText === "" ? 0 : userText.split(/\s+/).length;
    let wpm = 0;
    if (timeElapsed !== 0) {
        wpm = Math.round((typeWords / timeElapsed) * 60);
    }
    document.getElementById("output").innerHTML = 
    `<h2>Typing test Result:</h2>
    <p>Words Typed: ${typeWords}</p>
    <p>Time Ellapsed: ${timeElapsed.toFixed(2)}sec
    <p>Words per minute (WPM): ${wpm}</p>`;
}