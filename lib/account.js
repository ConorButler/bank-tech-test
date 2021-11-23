const statement = require('./statement');
const Transaction = require('./transaction');

class Account {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.log('credit', amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.log('debit', amount);
  }

  log(transactionType, amount) {
    this.history.push(
      new Transaction({
        [transactionType]: amount,
        account: this,
      })
    );
  }

  statement() {
    console.log(statement(this.history));
  }
}

module.exports = Account;
