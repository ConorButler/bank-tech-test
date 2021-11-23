class Transaction {
  constructor({ credit = null, debit = null, account }) {
    (this.date = new Date()),
      (this.credit = credit),
      (this.debit = debit),
      (this.balance = account.balance);
  }
}

module.exports = Transaction;
