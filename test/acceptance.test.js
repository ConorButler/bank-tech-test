const Account = require('../lib/account');

it('Passes the acceptance criteria', () => {
  let bankAccount = new Account();

  bankAccount.deposit(1000, '10/01/2023');
  bankAccount.deposit(2000, '13/01/2023');
  bankAccount.withdraw(500, '14/01/2023');

  expect(bankAccount.statement()).toEqual(
    [
      'date || credit || debit || balance',
      '14/01/2023 || || 500.00 || 2500.00',
      '13/01/2023 || 2000.00 || || 3000.00',
      '10/01/2023 || 1000.00 || || 1000.00',
    ].join('\n')
  );
});
