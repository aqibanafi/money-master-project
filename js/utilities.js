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
function getDisplayValueForNan (value) {
    const getValue = document.getElementById(value);
    const getInnerText = getValue.innerText;
    return getInnerText;
}