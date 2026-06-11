let testText = "Ultimately, progress is shaped by the choices people make collectively and individually. Curiosity drives discovery, empathy strengthens communities, and perseverance enables long-term achievement. By remaining open to new ideas while maintaining a sense of responsibility, individuals can contribute to a future that is both innovative and inclusive.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    document.getElementById("output").style.display = "none";
    startTime = new Date().getTime();
    //console.log(startTime);
}

function endTest() {
    endTime = new Date().getTime();
    const userInput = document.getElementById("userInput");
    userInput.readOnly = true;
    let userText = userInput.value.trim();
    //console.log(endTime);
    let timeElapsed = (endTime - startTime) / 1000;
    let typeWords = (userText === "") ? 0 : userText.split(/\s+/).length;
    let wpm = 0;
    if (timeElapsed !== 0) {
        wpm = Math.round((typeWords / timeElapsed) * 60);
    }
    document.getElementById("output").innerHTML = 
    `<h2>Typing test Result:</h2>
    <p>Words Typed: ${typeWords}</p>
    <p>Time Ellapsed: ${timeElapsed.toFixed(2)}sec
    <p>Words per minute (WPM): ${wpm}</p>`;
    document.getElementById("output").style.display = "block";
}