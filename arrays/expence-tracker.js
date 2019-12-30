const account = {
  name: "Bharat Makwana",
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach(function(income) {
      totalIncome = totalIncome + income.amount;
    });
    let totalBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  }
};

// expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expences -> Bharat Makwana has $1250 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());

// add income array to account
// add income method -> description, amount
// tweak getAccountSummary

// Bharat Makwana has a balance of $10. $100 in income. $90 in expenses.
