let fahrenheit = document.getElementsByTagName('input')[0];
let celcius = document.getElementsByTagName('input')[1];
let convertedTemp = document.getElementById('conversion');
let button = document.getElementById('submit');
const maxLength = 6;

//prevents 'e' or '+' keypress
function disableCertainKeys(event) {
    if (event.key === 'e' || event.key === '+') {
        event.preventDefault();
    }
}

function roundToHundredth(value) {
    return Number(value.toFixed(2)).toFixed(2);
}

function clearValues() {
    fahrenheit.value = "";
    celcius.value = "";
}

//convert fahrenheit to celcius, round to nearest hundredth, add unicode celcius symbol to the end
function celciusConvert(value) {
    const conversion = (value - 32) * (5 / 9);
    convertedTemp.textContent = roundToHundredth(conversion) + '\u2103';
}

//convert celcius to fahrenheit, round to nearst hundredth, add unicode fahrenheit symbol to the end
function fahrenheitConvert(value) {
    const conversion = ((9 / 5) * value) + 32;
    convertedTemp.textContent = roundToHundredth(conversion) + '\u2109';
}

//error message if checkValueLength() fails
function displayError() {
    convertedTemp.style.color = '#D05800';
    convertedTemp.textContent = 'VALUE TOO LARGE!';
}
//prevents 'e' and '+' from being input with keypress
fahrenheit.addEventListener("keypress", function() {
    disableCertainKeys(event);
});

celcius.addEventListener("keypress", function() {
    disableCertainKeys(event);
});

fahrenheit.addEventListener("change", function() {
    if (this.value.length < maxLength) { //makes sure input value is under 6 numbers
        convertedTemp.style.color = '#4F0000';
        fahrenheitConvert(this.value);
    } else {
        displayError();
    }
    clearValues(); //clears input fields
});

celcius.addEventListener("change", function() {
    if (this.value.length < maxLength) {
        convertedTemp.style.color = '#00345D';
        celciusConvert(this.value);
    } else {
        displayError();
    }
    clearValues();
});

//button clears both fields just in case something is stuck in them
button.addEventListener('click', function() {
    clearValues();
});