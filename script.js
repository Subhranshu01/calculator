var buttons = document.querySelectorAll("button");
var buttons_array = Array.from(buttons);
var inputbox = document.querySelector("#inputbox");
var string = "";
var calculatorActive = false; // Track whether the calculator is active
var cacl = document.querySelector(".calculator");

// Toggle switch event listener
const togg = document.getElementById('toggle');
togg.addEventListener('change', function () {
    const switchStatus = this.checked;

    if (switchStatus) {
        // Calculator is turned on
        calculatorActive = true;
        for (const key in buttons_array) {
            buttons_array[key].addEventListener("click", handleButtonClick);
        }
        cacl.style.backgroundColor = "yellowgreen"; // Set background color to yellow
    } else {
        // Calculator is turned off
        calculatorActive = false;
        inputbox.value = ""; // Clear the input box
        for (const key in buttons_array) {
            buttons_array[key].removeEventListener("click", handleButtonClick);
        }
        cacl.style.backgroundColor = "black"; // Set background color to red
    }
});

// Handle button click
function handleButtonClick(event) {
    if (!calculatorActive) return; // Ignore button clicks when calculator is off

    if (event.target.innerHTML === 'DEL') {
        string = string.substring(0, string.length - 1);
        inputbox.value = string;
    } else if (event.target.innerHTML === 'AC') {
        string = "";
        inputbox.value = string;
    } else if (event.target.innerHTML === '=') {
        try {
            string = string.replace("x", "*");
            string = eval(string);
            inputbox.value = string;
        } catch (error) {
            inputbox.value = "Error: Invalid operation!";
        }
    } else {
        string += event.target.innerHTML;
        inputbox.value = string;
    }
}
