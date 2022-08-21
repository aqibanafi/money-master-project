
document.getElementById('calculate-button').addEventListener('click', function(){
    const income = inputFromBox ('income-input');
    const food = inputFromBox ('food-input');
    const rent = inputFromBox ('rent-input');
    const cloth = inputFromBox ('cloth-input');
    const totalExpense = food + rent + cloth;
    // clearAllField ();
    const result = displayValue ('total-expense', totalExpense)
    const getBalance = income - totalExpense;
    const displayBalance = displayValue ('balance', getBalance)
    const expenseNan = getDisplayValueForNan ('total-expense')
    const balanceNan = getDisplayValueForNan ('balance')
    const savingNan = getDisplayValueForNan ('saving-amount')
    const remainingNan = getDisplayValueForNan ('remaining-balance')
    if(isNaN(expenseNan || balanceNan || savingNan || remainingNan)) {
        alert('Please Enter Number');
        clearAllField ();
        return;
    }
    if(income < 0 || food < 0 || rent < 0 || cloth < 0) {
        alert("Enter Positive Number");
        clearAllField ();
        return;
    }
    if (totalExpense > income) {
        alert("Your Expense is More Than Your Income");
        clearAllField ();
        return;
    }
})
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = inputFromBox ('save-input');
    if (saveInput > 100){
        alert("Sorry!");
        clearAllField ();
        return;
    }
    const income = inputFromBox ('income-input')
    const saveCalculation = income * (saveInput / 100);
    const getBalanceValue = getDisplayValueForNan ('balance')
    if (saveCalculation > getBalanceValue) {
        alert("Saving amount should not higher than balance");
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