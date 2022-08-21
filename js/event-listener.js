let count = 0;
document.getElementById('calculate-button').addEventListener('click', function(){
    const income = inputFromBox ('income-input');
    const food = inputFromBox ('food-input');
    const rent = inputFromBox ('rent-input');
    const cloth = inputFromBox ('cloth-input');
    const totalExpense = food + rent + cloth;
    const result = displayValue ('total-expense', totalExpense)
    const getBalance = income - totalExpense;
    const displayBalance = displayValue ('balance', getBalance)
    const expenseNan = getDisplayValueForNan ('total-expense')
    const balanceNan = getDisplayValueForNan ('balance')
    const savingNan = getDisplayValueForNan ('saving-amount')
    const remainingNan = getDisplayValueForNan ('remaining-balance')
    count+= 1
    if(count >= 2) {
        alert("Please Reload Page");
    }
    const incomeTest = document.getElementById('income-input');
    const incomeTestValue = incomeTest.value;
    const foodTest = document.getElementById('food-input');
    const foodTestValue = foodTest.value;
    const rentTest = document.getElementById('rent-input');
    const rentTestValue = rentTest.value;
    const clothTest = document.getElementById('cloth-input');
    const clothTestValue = clothTest.value;
    if(onlyNumber(incomeTestValue) !== true) {
        if(incomeTestValue.includes('.') !== true) {
            alert("Provide Number");
        }
    }
    if(onlyNumber(foodTestValue) !== true) {
        if(foodTestValue.includes('.') !== true) {
            alert("Provide Number");
        }
    }
    if(onlyNumber(rentTestValue) !== true) {
        if(rentTestValue.includes('.') !== true) {
            alert("Provide Number");
        }
    }
    if(onlyNumber(clothTestValue) !== true) {
        if(clothTestValue.includes('.') !== true) {
            alert("Provide Number");
        }
    }
    if(isNaN(expenseNan && balanceNan && savingNan && remainingNan)) {
        const alert = document.getElementById('alert');
        alert.innerText = "Please Enter Number to Get Output"
        alert.style.display = 'block';
        return;
    }
    if(income < 0 || food < 0 || rent < 0 || cloth < 0) {
        const alert = document.getElementById('alert');
        alert.innerText = "Please Enter Positive Number"
        alert.style.display = 'block';
        clearAllField ();
        
        return;
    }
    if (totalExpense > income) {
        const alert = document.getElementById('alert');
        alert.innerText = "Your Expense is More Than Your Income"
        alert.style.display = 'block';
        clearAllField ();
        return;
    }
})
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = inputFromBox ('save-input');
    if(isNaN(saveInput)){
        const alert = document.getElementById('alert');
        alert.innerText = "Please Enter Number to Get Output"
        alert.style.display = 'block';
        clearAllField ();
        return;
    }
    if (saveInput > 100){
        const alert = document.getElementById('alert');
        alert.innerText = "Input More Than 100% is Not Accetable"
        alert.style.display = 'block';
        clearAllField ();
        return;
    }
    const income = inputFromBox ('income-input')
    const saveCalculation = income * (saveInput / 100);
    const getBalanceValue = getDisplayValueForNan ('balance')
    if (saveCalculation > getBalanceValue) {
        const alert = document.getElementById('alert');
        alert.innerText = "Saving amount should not higher than balance"
        alert.style.display = 'block';
        clearAllField ();
        return;
    } else {

    
    const inputSaveDisplay = displayValue ('saving-amount', saveCalculation);
    const saveAmountCheck = getDisplayValueForNan ('saving-amount');
    const afterSaveRemainingBalance = getBalanceValue - saveCalculation;
    const displayRemainingBalance = displayValue ('remaining-balance', afterSaveRemainingBalance);
    }
    clearInputField ('income-input');
    clearInputField ('food-input');
    clearInputField ('cloth-input');
    clearInputField ('rent-input');
    clearInputField ('save-input');
})
function clearAllField () {
    clearInputField ('income-input');
    clearInputField ('food-input');
    clearInputField ('cloth-input');
    clearInputField ('rent-input');
    clearInputField ('save-input');
}
function clearDisplay () {
    clearDisplay ('total-expense');
    clearDisplay ('balance');
    clearDisplay ('saving-amount');
    clearDisplay ('remaining-balance');
}