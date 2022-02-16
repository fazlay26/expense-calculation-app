function percentage(num, per) {
    return (num / 100) * per;
}

// console.log(percentage(10000, 20));

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById("income-input")
    const income = incomeInput.value
    const foodInput = document.getElementById("food-input").value
    const rentInput = document.getElementById('rent-input').value
    const clotheInput = document.getElementById('clothes-input').value
    const totalExpenses = document.getElementById('total-expenses')
    const totalExpensesText = totalExpenses.innerText
    const totalbalance = document.getElementById("balance")
    const totalbalanceText = totalbalance.innerText
    const fullExpenses = parseInt(foodInput) + parseInt(rentInput) + parseInt(clotheInput)
    // updated total expenses
    totalExpenses.innerText = fullExpenses
    // update balance
    const balance = income - fullExpenses;
    totalbalance.innerText = balance
})
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById("income-input")
    const income = incomeInput.value
    const saveInput = document.getElementById('save-input')
    const save = saveInput.value
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = savingAmountText.innerText;
    // update saving amount

    const updateSavingAmount = percentage(income, save)
    savingAmountText.innerText = updateSavingAmount

    const totalbalance = document.getElementById("balance")
    const totalbalanceText = totalbalance.innerText
    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalance = remainingBalanceText.innerText;
    const finalRemainingBalance = totalbalanceText - updateSavingAmount
    remainingBalanceText.innerText = finalRemainingBalance
})