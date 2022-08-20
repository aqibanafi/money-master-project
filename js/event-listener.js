document.getElementById('calculate-button').addEventListener('click', function(){
    const income = inputFromBox ('income-input');
    const food = inputFromBox ('food-input');
    const rent = inputFromBox ('rent-input');
    const cloth = inputFromBox ('cloth-input');
    const totalExpense = food + rent + cloth;
    const result = displayValue ('total-expense', totalExpense)
    const getBalance = income - totalExpense;
    const displayBalance = displayValue ('balance', getBalance)
})
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = inputFromBox ('save-input');
    const getBalanceValue = document.getElementById('balance');
    const getBalanceIntegarValue = parseInt(getBalanceValue.innerText);
    const income = inputFromBox ('income-input');
    const saveCalculation = income * (saveInput / 100);
    const inputSaveDisplay = displayValue ('saving-amount', saveCalculation);
    const afterSaveRemainingBalance = getBalanceIntegarValue - saveCalculation;
    const displayRemainingBalance = displayValue ('remaining-balance', afterSaveRemainingBalance);
    clearInputField ('income-input');
    clearInputField ('food-input');
    clearInputField ('cloth-input');
    clearInputField ('rent-input');
    clearInputField ('save-input');
})