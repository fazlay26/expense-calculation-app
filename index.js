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