const statement = require('../lib/statement');

describe('statement', () => {
  it('prints a statement given an account history', () => {
    let mockHistory = [
      {
        date: new Date('11/20/2021'),
        credit: 1000,
        debit: null,
        balance: 1000,
      },
      {
        date: new Date('11/21/2021'),
        credit: 2000,
        debit: null,
        balance: 3000,
      },
      {
        date: new Date('11/22/2021'),
        credit: null,
        debit: 500,
        balance: 2500,
      },
    ];

    expect(statement(mockHistory)).toEqual(
      [
        'date || credit || debit || balance',
        '22/11/2021 || || 500.00 || 2500.00',
        '21/11/2021 || 2000.00 || || 3000.00',
        '20/11/2021 || 1000.00 || || 1000.00',
      ].join('\n')
    );
  });

  it('only prints the header if history is empty', () => {
    expect(statement([])).toEqual('date || credit || debit || balance' + '\n');
  });
});
