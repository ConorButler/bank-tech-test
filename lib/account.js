const statement = require('./statement');
const Transaction = require('./transaction');

class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.log('credit', amount);
  }

  withdraw(amount) {
    this.checkWithdrawal(amount);
    this.balance -= amount;
    this.log('debit', amount);
  }

  checkWithdrawal(amount) {
    if (amount > this.balance) {
      throw 'That amount exceeds your balance.';
    }
  }

  log(transactionType, amount) {
    this.history.push(
      new Transaction({
        [transactionType]: amount,
        account: this,
      })
    );
  }

  printStatement() {
    console.log(statement(this.history));
  }
}

module.exports = Account;
