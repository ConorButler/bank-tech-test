const Account = require('../lib/account');

it('Passes the acceptance criteria', () => {
  let bankAccount = new Account();

  jest.useFakeTimers();
  // mocking the current Date

  jest.setSystemTime(new Date(2023, 0, 10));
  bankAccount.deposit(1000);
  jest.setSystemTime(new Date(2023, 0, 13));
  bankAccount.deposit(2000);
  jest.setSystemTime(new Date(2023, 0, 14));
  bankAccount.withdraw(500);

  console.log = jest.fn();
  bankAccount.printStatement();
  expect(console.log).toHaveBeenCalledWith(
    [
      'date || credit || debit || balance',
      '14/01/2023 || || 500.00 || 2500.00',
      '13/01/2023 || 2000.00 || || 3000.00',
      '10/01/2023 || 1000.00 || || 1000.00',
    ].join('\n')
  );
});
