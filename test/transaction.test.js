const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  it('stores current date', () => {
    jest.useFakeTimers();
    let mockDate = new Date(2020, 0, 0);
    jest.setSystemTime(mockDate);

    let transaction = new Transaction({});
    expect(transaction.date).toEqual(mockDate);
  });

  // Not testing how it stores credit/debit/balance as that is testing state
});
