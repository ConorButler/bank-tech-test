class Transaction {
  constructor({ credit = null, debit = null }) {
    (this.date = new Date()), (this.credit = credit), (this.debit = debit);
  }
}

module.exports = Transaction;
