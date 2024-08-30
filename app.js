let expenses = [];

const names = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const addExpense = document.querySelector(".btn");
const expenseTableBody = document.querySelector(".expense-table-body");

function addExpenses(event) {
    let nameValue = names.value;
    let dateValue = date.value;
    let amountValue = amount.value;
    if(nameValue === "") {
        alert("Please enter a name.");
        return;
    }
    if(dateValue === "") {
        alert("Please select a date");
        return;
    }
    if(isNaN(amountValue) || amountValue <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    expenses.push({nameValue, dateValue, amountValue});

    const newRow = expenseTableBody.insertRow();

    const nameCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        expenseTableBody.removeChild(newRow);
    });
    deleteCell.appendChild(deleteBtn);

    const expense = expenses[expenses.length - 1];
    nameCell.textContent = expense.nameValue;
    dateCell.textContent = expense.dateValue;
    amountCell.textContent = expense.amountValue;

    names.value = '';
    date.value = '';
    amount.value = '';

    event.preventDefault();
}

addExpense.addEventListener('click', addExpenses);