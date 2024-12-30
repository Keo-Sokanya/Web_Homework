// Get the input display element
const display = document.getElementById("input-display");

// Append a value to the display
function appendToDisplay(value) {
    display.value += value; 
}

// Clear the display
function clearDisplay() {
    display.value = ""; 
}

// Perform calculation
function calculate() {
        display.value = eval(display.value);
}


