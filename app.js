function percentage(num, per) {
    return (num / 100) * per;
}
function incomeInput() {
    const incomeInput = document.getElementById("income-input")
    const income = incomeInput.value
    return income
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = incomeInput();
    const foodInput = document.getElementById("food-input").value
    const rentInput = document.getElementById('rent-input').value
    const clotheInput = document.getElementById('clothes-input').value
    const totalExpenses = document.getElementById('total-expenses')
    const totalExpensesText = totalExpenses.innerText

    const totalbalance = document.getElementById("balance")
    const totalbalanceText = totalbalance.innerText

    if (foodInput > 0 && rentInput > 0 && clotheInput > 0 && income > 0) {
        const fullExpenses = parseInt(foodInput) + parseInt(rentInput) + parseInt(clotheInput)
        if (income > fullExpenses) {
            // update balance
            const balance = income - fullExpenses;
            totalbalance.innerText = balance

            // updated total expenses
            totalExpenses.innerText = fullExpenses
        }
        else {
            alert(" your expenses is more than your income")
        }

    }
    else {
        alert('please provide positive number');
    }

})
document.getElementById('save-btn').addEventListener('click', function () {

    const income = incomeInput();

    const saveInput = document.getElementById('save-input')
    const save = saveInput.value
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = savingAmountText.innerText;

    // const totalbalanceText = balanceInput();
    const totalbalance = document.getElementById("balance")
    const totalbalanceText = totalbalance.innerText

    if (saveInput.value > 0) {


        let updateSavingAmount = percentage(income, save)
        if (updateSavingAmount < totalbalanceText) {

            savingAmountText.innerText = updateSavingAmount


            // update saving amount
            updateSavingAmount = percentage(income, save)
            const remainingBalanceText = document.getElementById('remaining-balance');
            const remainingBalance = remainingBalanceText.innerText;
            debugger;
            const finalRemainingBalance = totalbalanceText - updateSavingAmount
            remainingBalanceText.innerText = finalRemainingBalance

        }
        else {
            alert('your saving amount is moe than your Balance')
        }
    }
    else {
        alert('please give postive value')
    }
})