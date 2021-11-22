const Statement = require('./statement');

describe('Statement', () => {
  let bankStatement = new Statement();

  it('prints a statement', () => {
    expect(bankStatement.print()).toEqual('date || credit || debit || balance');
  });
});
