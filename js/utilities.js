// Input Function 

function inputFromBox (inputBoxId) {
    const findInputBox = document.getElementById(inputBoxId);
    const getInputBoxValue = parseInt(findInputBox.value);
    return getInputBoxValue;
}

// Display Function 

function displayValue (displayId, value) {
    const findDisplay = document.getElementById(displayId);
    const getDisplayValue = parseInt(findDisplay.innerText);
    // const findNumber = document.getElementById(value);
    // const getNumber = parseInt(findNumber.value);
    const total = getDisplayValue + value;
    findDisplay.innerText = total;
}
// Clear Button Function 
function clearInputField (input) {
    const getInputField = document.getElementById(input);
    getInputField.value = '';
}
function clearDisplay (displayValue) {
    const getDisplay = document.getElementById(displayValue)
    getDisplay.innerText = '';
}
function getDisplayValueForNan (valueInput) {
    const getValue = document.getElementById(valueInput);
    const getInnerText = parseInt(getValue.innerText);
    return getInnerText;
}
