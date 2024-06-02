// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const addExpenseButton = document.getElementById('addExpense');
    const expenseList = document.getElementById('expenseList');
    const totalBalance = document.getElementById('totalBalance');

    let expenses = [];

    addExpenseButton.addEventListener('click', () => {
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (description !== '' && !isNaN(amount) && amount > 0) {
            const expense = {
                description: description,
                amount: amount
            };
            expenses.push(expense);
            renderExpenses();
            updateBalance();
        } else {
            alert('Please enter a valid description and amount.');
        }

        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    });

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.description} - $${expense.amount.toFixed(2)} <button onclick="deleteExpense(${index})">Delete</button>`;
            expenseList.appendChild(li);
        });
    }

    function updateBalance() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalBalance.textContent = `$${total.toFixed(2)}`;
    }

    window.deleteExpense = (index) => {
        expenses.splice(index, 1);
        renderExpenses();
        updateBalance();
    };
});
