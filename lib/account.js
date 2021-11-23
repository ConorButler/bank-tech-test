const statement = require('./statement');
const Transaction = require('./transaction');

class Account {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      transaction: new Transaction({ credit: amount }),
      balance: this.balance,
    });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.history.push({
      transaction: new Transaction({ debit: amount }),
      balance: this.balance,
    });
  }

  statement() {
    console.log(statement(this.history));
  }
}

module.exports = Account;
