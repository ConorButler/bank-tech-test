const statement = require('./statement');

class Account {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.log({ credit: amount });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.log({ debit: amount });
  }

  log({ credit = null, debit = null }) {
    this.history.push({
      date: new Date(),
      credit: credit,
      debit: debit,
      balance: this.balance,
    });
  }

  statement() {
    return statement(this.history);
  }
}

module.exports = Account;
