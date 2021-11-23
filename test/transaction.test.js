const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  it('stores current date', () => {
    let mockDate = new Date(2020, 0, 0);
    let mockAccount = { account: { balance: 0 } };

    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
    // mocking the current Date

    let transaction = new Transaction(mockAccount);
    expect(transaction.date).toEqual(mockDate);
  });

  // Not testing how it stores credit/debit/account as I think that's testing state.
});
