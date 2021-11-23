const statement = require('./statement');

class Account {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    this.log({ date: date, credit: amount });
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.log({ date: date, debit: amount });
  }

  log({ date, credit = null, debit = null }) {
    this.history.push({
      date: date,
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
